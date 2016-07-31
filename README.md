# AFET Angular Library by darkthread

註：前行兩百公尺有文中說明

afet-cbx-list
-------------

Checkbox list directive convert a array of objects or strings 
to a list of checkboxes.  
It supports both multiple or exclusive modes, 
and the selected result will be bind to a array property or a object/string property 

Example:

````javascript
$scope.ObjItems = [
    { k: "A1", name: "Jeffrey" },
    { k: "A2", name: "Darkthread" },
    { k: "B1", name: "Hacker" }
];
$scope.StrArray = ["Jeffrey", "Darkthread", "Hacker"];
````

````html
<div afet-cbx-list a-items="ObjItems" a-model="SelObjs" a-text-field="name"></div>
<div afet-cbx-list a-items="StrArray" a-model="SelString" a-exclusive="true"></div>
````
* **a-items**:  
data source to generate the checkbox list, 
it can be a array of objects or strings.
* **a-model**:  
property to bind selected result. 
In multiple mode, the value is the array of selected objects or strings.
In exclusive mode, the value is the selected object or string.
* **a-text-field**:  
when data source type is a array of objects, 
use `a-text-field` to assign the property name to display on checkbox list.
* **a-explusive**:  
the directive use multiple selection mode by default, you can use `a-exclusive="true"` to set exclusive mode.   

The following is the operation demo, or you can try the [live demo](http://htmlpreview.github.io/?https://github.com/darkthread/AfetAngular/master/src/Htmls/CbxListDemo.html) .

![Demo](https://raw.github.com/darkthread/AfetAngular/master/afetCbxListDemo.gif)


# AFET Angular Library 中文說明

afet-cbx-list
-------------

依據物件陣列或字串陣列產生勾選方格清單，支援多選及單選模式，
選取結果將繫結到陣列屬性（多選模式）或物件/字串屬性（單選模式）。 

範例:

````javascript
$scope.ObjItems = [
    { k: "A1", name: "Jeffrey" },
    { k: "A2", name: "Darkthread" },
    { k: "B1", name: "Hacker" }
];
$scope.StrArray = ["Jeffrey", "Darkthread", "Hacker"];
````

````html
<div afet-cbx-list a-items="ObjItems" a-model="SelObjs" a-text-field="name"></div>
<div afet-cbx-list a-items="StrArray" a-model="SelString" a-exclusive="true"></div>
````
* **a-items**:  
產生勾選方格清單的資料來源，可以是物件陣列或字串陣列。
* **a-model**:  
要繫結選取結果的屬性，在多選模式其型別為物件或字串陣列，在單選模式則為物件或字串。
* **a-text-field**:  
當資料來源為物件指定，需使用`a-text-field`決定以哪個屬性做為顯示在清單上的文字。
* **a-explusive**:  
預設為多選模式，可透過`a-exclusive="true"`切換成單選模式。   

以下為操作示範，或者你也可[親手試試](http://htmlpreview.github.io/?https://github.com/darkthread/AfetAngular/master/src/Htmls/CbxListDemo.html) .

![Demo](https://raw.github.com/darkthread/AfetAngular/master/afetCbxListDemo.gif)

