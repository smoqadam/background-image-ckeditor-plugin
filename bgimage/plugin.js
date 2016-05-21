/**
 * Set background image for CKeditor
 * Author : Saeed Moqadam <phpro.ir@gmail.com>
 * Under MIT License
 */
CKEDITOR.plugins.add('bgimage',{
    lang:['en'],
    icons: 'abbr',
    init:function (editor) {
        editor.addCommand('bgimage',new CKEDITOR.dialogCommand('bgImageDialog'));
        editor.ui.addButton('Background image',{
            'label':editor.lang.bgimage.labelName,
            'command':'bgimage',
            'toolbar':'insert',
            icon: this.path + 'icons/bg.png'
        });
        CKEDITOR.dialog.add('bgImageDialog',this.path+'dialog/bgimageDialog.js');
    }
})