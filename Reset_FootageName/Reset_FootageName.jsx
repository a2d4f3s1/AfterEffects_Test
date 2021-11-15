/*	Reset_FootageName v100
//	フッテージの名前をリセット！
//
//	change log
//	v100 とりあえずリリース
*/

var selectItems = app.project.selection;

for  (index in selectItems) {
	selectItem = selectItems[index];
	if (selectItem instanceof FootageItem) {
		if (selectItem.mainSource instanceof FileSource) {
			selectItems[index].name = "";
		};
	};
};