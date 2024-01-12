
:: This .bat file could build the frontend, copy the export folder to backend, and run backend automaticly. 

cd frontend
call npm run build
cd ../backend
rmdir /s /q build
mkdir build
xcopy "..\frontend\build" "./build" /s /e
node server.js