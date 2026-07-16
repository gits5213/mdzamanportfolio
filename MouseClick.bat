@echo off
title Auto Clicker - Press Ctrl+C to Stop

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"Add-Type -TypeDefinition 'using System; using System.Runtime.InteropServices; public class MouseClick { [DllImport(\"user32.dll\")] public static extern void mouse_event(uint flags, uint dx, uint dy, uint data, UIntPtr extraInfo); }'; ^
while ($true) { ^
    [MouseClick]::mouse_event(0x0002, 0, 0, 0, [UIntPtr]::Zero); ^
    [MouseClick]::mouse_event(0x0004, 0, 0, 0, [UIntPtr]::Zero); ^
    Start-Sleep -Seconds 30; ^
}"