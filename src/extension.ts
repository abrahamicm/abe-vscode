import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('abe-extension.convertToPhpArray', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const selection = editor.selection;
    const text = editor.document.getText(selection)
      .replace(/[\r\n]+(\s*)/g, "', '") // Eliminar cualquier espacio en blanco adicional después del último carácter de la línea
      .trim(); // Eliminar cualquier espacio en blanco adicional al principio y al final del texto
    editor.edit(editBuilder => {
      editBuilder.replace(selection, `\$array = ['${text}'];`);
    });
  }));
}

export function deactivate() {}
