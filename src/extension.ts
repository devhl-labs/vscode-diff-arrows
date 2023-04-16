import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let previous = vscode.commands.registerCommand('diff-arrows.previous', () => {
        vscode.commands.executeCommand(
            "workbench.action.editor.previousChange"
        );
    });

    context.subscriptions.push(previous);

    let next = vscode.commands.registerCommand('diff-arrows.next', () => {
        vscode.commands.executeCommand(
            "workbench.action.editor.nextChange"
        );
    });

    context.subscriptions.push(next);
}

export function deactivate() {}
