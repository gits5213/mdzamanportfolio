@echo off
title Mouse Move and Click - Press Ctrl+C to Stop

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"Add-Type -AssemblyName System.Windows.Forms; ^
Add-Type -AssemblyName System.Drawing; ^
Add-Type -TypeDefinition 'using System; using System.Runtime.InteropServices; public class MouseClick { [DllImport(\"user32.dll\")] public static extern void mouse_event(uint flags, uint dx, uint dy, uint data, UIntPtr extraInfo); }'; ^
while ($true) { ^
    $originalPosition = [System.Windows.Forms.Cursor]::Position; ^
    $newPosition = [System.Drawing.Point]::new($originalPosition.X + 100, $originalPosition.Y + 50); ^
    [System.Windows.Forms.Cursor]::Position = $newPosition; ^
    Start-Sleep -Milliseconds 500; ^
    [MouseClick]::mouse_event(0x0002, 0, 0, 0, [UIntPtr]::Zero); ^
    [MouseClick]::mouse_event(0x0004, 0, 0, 0, [UIntPtr]::Zero); ^
    Start-Sleep -Milliseconds 500; ^
    [System.Windows.Forms.Cursor]::Position = $originalPosition; ^
    Start-Sleep -Seconds 30; ^
}"