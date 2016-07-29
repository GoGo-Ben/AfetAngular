module afet.directives {
    interface ICustScope extends ng.IScope {
        Items: any[];
        TextField: string;
        Exclusive: boolean;
        Model: any | any[];
        OnChange: (index: number) => void;
        StringArrayMode: boolean;
        ChkBindList: { Checked: boolean }[];
    }
    export function afetCbxList() {
        return {
            scope: {
                Items: "=aItems",
                TextField: "@aTextField",
                Exclusive: "=aExclusive",
                Model: "=aModel"
            },
            link: function (scope: ICustScope, element, attrs) {
                //if Items is a string array
                scope.StringArrayMode = scope.Items && scope.Items.length
                    && typeof (scope.Items[0]) === "string";
                //generate ChkBindList, array of { Checked: true/false }
                function updateChkBindList() {
                    scope.ChkBindList = $.map(scope.Items,
                        function (item) {
                            return {
                                Checked: scope.Exclusive ?
                                    item === scope.Model :
                                    $.inArray(item, scope.Model) > -1
                            };
                        });
                }
                updateChkBindList();
                

                function updateModel() {
                    if (scope.Exclusive) {
                        $.each(scope.ChkBindList, function (i, v) {
                            if (v.Checked) {
                                scope.Model = scope.Items[i];
                                return false;
                            }
                        });
                    }
                    else {
                        scope.Model = $.grep(scope.Items, function (item, index) {
                            return scope.ChkBindList[index].Checked;
                        });
                    }
                }

                scope.$watch("Items", updateChkBindList, true);
                scope.$watch("Model", updateChkBindList, true);

                scope.OnChange = function (index) {
                    //in exclusive mode, all other checked checkbox will be cleared
                    if (scope.Exclusive) {
                        $.each(scope.ChkBindList, function (i) {
                            scope.ChkBindList[i].Checked = (i == index);
                        });
                    }
                    updateModel();
                };
            },
            template: "<div class='a-cbx-list'>" +
            "<label ng-repeat='m in ChkBindList track by $index'>" +
            "<input type='checkbox' ng-model='m.Checked' ng-change='$parent.OnChange($index)' />" +
            "{{$parent.StringArrayMode ? $parent.Items[$index] : $parent.Items[$index][$parent.TextField] }}</label>" +
            "</div>"
        };
    }

}