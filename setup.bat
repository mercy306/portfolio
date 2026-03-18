@echo off
echo ====================================
echo Portfolio Setup Script
echo ====================================
echo.

echo Step 1: Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!
echo.

echo Step 2: Clearing previous installation...
if exist node_modules (
    echo Removing old node_modules...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    echo Removing old package-lock.json...
    del /q package-lock.json
)
echo.

echo Step 3: Installing dependencies...
echo This may take a few minutes. Please wait...
echo.

REM Try installing with different configurations
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo.
    echo First attempt failed. Trying alternative method...
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo ===================================================================
        echo INSTALLATION FAILED - Network Issue Detected
        echo ===================================================================
        echo.
        echo Your network is blocking npm access. Try these solutions:
        echo.
        echo 1. Check your internet connection
        echo 2. Disable VPN or proxy if active
        echo 3. Try a different network (mobile hotspot, etc.)
        echo 4. Configure npm to use a mirror registry:
        echo    npm config set registry https://registry.npmmirror.com
        echo 5. Manually download packages from https://www.npmjs.com/
        echo.
        echo After fixing network issues, run: npm install
        echo ===================================================================
        pause
        exit /b 1
    )
)

echo.
echo ====================================
echo Installation Complete!
echo ====================================
echo.
echo Next steps:
echo 1. Run 'npm run dev' to start the development server
echo 2. Open http://localhost:3000 in your browser
echo 3. Customize your portfolio by editing the component files
echo.
echo See README_PORTFOLIO.md for detailed instructions
echo ====================================
pause
