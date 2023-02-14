import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('abe-extension.convertToPhpArray', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const selection = editor.selection;
    const text = editor.document.getText(selection).replace(/\n/g, "', '");
    editor.edit(editBuilder => {
      editBuilder.replace(selection, `\$array = ['${text}'];`);
    });
  }));
}

export function deactivate() {}