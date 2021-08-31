import 'ace-builds';
import 'ace-builds/webpack-resolver';

// eslint-disable-next-line no-undef
const editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/c_cpp');
editor.setKeyboardHandler('ace/keyboard/vim');
editor.setAutoScrollEditorIntoView(true);
editor.setShowPrintMargin(false);
// editor.commands.addCommand({
//   name: 'parseFile',
//   bindKey: { win: 'Ctrl-enter', mac: 'Command-enter' },
//   exec: () => main(),
// });
editor.setFontSize(20);
editor.execCommand('showKeyboardShortcuts');

export default editor;
