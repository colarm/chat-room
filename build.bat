cd frontend
call npm run build
cd ../backend
rmdir /s /q build
mkdir build
xcopy "..\frontend\build" "./build" /s /e
node server.js