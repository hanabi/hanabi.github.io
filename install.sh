set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Install JavaScript dependencies
cd "$DIR"
npm ci

# Install Python dependencies
cd "$DIR/image-generator"
if command -v "pip3" > /dev/null; then
  pip3 install -r requirements.txt
elif command -v "pip" > /dev/null; then
  # Check to make sure that pip is for Python 3, not Python 2
  if [[ ! $(pip3 --version | sed -n 's/^.*(python \(.\).*/\1/p' | grep 3) ]]; then
    echo "Error: Your \"pip\" command appears to be associated with Python 2. Python 3 is required for this website."
    exit 1
  fi
  pip install -r requirements.txt
else
  echo "Error: You do not appear to have Python / pip installed, which is required for this website."
fi
