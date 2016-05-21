CKEDITOR.dialog.add('bgImageDialog', function(editor) {
    return {
        title: editor.lang.bgimage.bgImageTitle,
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth: 500,
        minHeight: 200,
        onOk: function() {
            var dialog = this;
            var imageURL = dialog.getValueOf('tab1', 'imageURL');
            var repeat = dialog.getValueOf('tab1', 'repeat');
            var pos = dialog.getValueOf('tab1', 'pos')
            var blendMode = dialog.getValueOf('tab1', 'blend')
            var attachment = dialog.getValueOf('tab1', 'attachment')
            var css = 'body {';
            css += 'background-image:url(' + imageURL + ');';
            css += 'background-repeat:' + repeat + ';';
            css += 'background-position:' + pos + ';';
            css += 'background-blend-mode:' + blendMode + ';';
            css += 'background-attachment:' + attachment + ';';
            css += '}';
            editor.document.appendStyleText(css)
        },
        contents: [{
            id: 'tab1',
            label: editor.lang.bgimage.bgImageTitle,
            title: editor.lang.bgimage.bgImageTitle,
            accessKey: 'Q',
            elements: [{
                type: 'vbox',
                padding: 0,
                children: [{
                        type: 'hbox',
                        widths: ['280px', '100px;vertical-align: middle;'],
                        align: 'right',
                        styles :'',
                        children: [{
                            type: 'text',
                            label: editor.lang.bgimage.imageUrl,
                            id: 'imageURL',
                        }, {
                            type: 'button',
                            id: 'browse',
                            label: editor.lang.common.browseServer,
                            hidden: true,
                            filebrowser: 'tab1:imageURL'
                        }]
                    }] 
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                        type: 'hbox',
                        widths: ['150px', '150px'],
                        align: 'right',
                        children: [{
                                type: 'select',
                                id: 'repeat',
                                label: editor.lang.bgimage.repeat,
                                items: [
                                    ['repeat'],
                                    ['no-repeat'],
                                    ['repeat-x'],
                                    ['repeat-y'],
                                ],
                                'default': 'repeat'
                            }, {
                                type: 'select',
                                id: 'attachment',
                                label: editor.lang.bgimage.attachment,
                                items: [
                                    ['scroll'],
                                    ['fixed'],
                                    ['local'],
                                ]
                            }] 
                    }] 
            }, {
                type: 'vbox',
                padding: 0,
                children: [{
                    type: 'hbox',
                    widths: ['150px', '150px'],
                    align: 'right',
                    children: [{
                        type: 'select',
                        id: 'blend',
                        label: editor.lang.bgimage.blendMode,
                        items: [
                            ['normal'],
                            ['multiply'],
                            ['screen'],
                            ['overlay'],
                            ['darken'],
                            ['lighten'],
                            ['color-dodge'],
                            ['saturation'],
                            ['color'],
                            ['luminosity'],
                        ],
                        style: 'float:left',
                        'default': 'normal'
                    }, {
                        type: 'select',
                        label: editor.lang.bgimage.position,
                        id: 'pos',
                        align: 'right',
                        items: [
                            ['left top'],
                            ['left center'],
                            ['left bottom'],
                            ['right top'],
                            ['right center'],
                            ['center top'],
                            ['center center'],
                            ['center center'],
                        ],
                        'default': 'left top'
                    }, ]
                }]
            }]
        }],
    }
})
