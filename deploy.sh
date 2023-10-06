echo "Building the App..."
npm run build

echo "Deploying to the server..."
scp -P 2023 -r dist/* ubuntu@cs.usk.ac.id:~/public_html/KreditTepat/

echo "Done!"