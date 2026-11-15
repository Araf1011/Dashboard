@echo off
set /p REPO_NAME="Enter your GitHub repository name (e.g. asris-demo): "
git remote remove origin 2>nul
git remote add origin https://github.com/Araf1011/%REPO_NAME%.git
git branch -M main
echo Pushing to https://github.com/Araf1011/%REPO_NAME%.git ...
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==========================================================
    echo SUCCESS! Repository pushed to:
    echo https://github.com/Araf1011/%REPO_NAME%
    echo.
    echo Your demo will automatically deploy via GitHub Actions to:
    echo https://araf1011.github.io/%REPO_NAME%/
    echo ==========================================================
) else (
    echo.
    echo Failed to push. Please ensure you created the repository on https://github.com/new first!
)
pause

