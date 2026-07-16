@echo off
title Mouse Mover - Press Ctrl+C to Stop

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"Add-Type -AssemblyName System.Windows.Forms; ^
Add-Type -AssemblyName System.Drawing; ^
while ($true) { ^
    $originalPosition = [System.Windows.Forms.Cursor]::Position; ^
    $newPosition = [System.Drawing.Point]::new($originalPosition.X + 50, $originalPosition.Y + 30); ^
    [System.Windows.Forms.Cursor]::Position = $newPosition; ^
    Start-Sleep -Milliseconds 300; ^
    [System.Windows.Forms.Cursor]::Position = $originalPosition; ^
    Start-Sleep -Seconds 60; ^
}"