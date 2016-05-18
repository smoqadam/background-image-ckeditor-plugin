/**
 * Set background image for CKeditor
 * Author : Saeed Moqadam <phpro.ir@gmail.com>
 * Under MIT License
 */
CKEDITOR.plugins.add('bgimage',{
    icons: 'abbr',
    init:function (editor) {
        editor.addCommand('bgimage',new CKEDITOR.dialogCommand('bgImageDialog'));
        editor.ui.addButton('Background image',{
            'label':'Background image',
            'command':'bgimage',
            'toolbar':'insert',
            icon: this.path + 'icons/bg.png'
        });
        CKEDITOR.dialog.add('bgImageDialog',this.path+'dialog/bgimageDialog.js');
    }
})