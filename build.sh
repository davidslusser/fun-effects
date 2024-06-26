#!/bin/bash

# Define directories
CSS_SRC_DIR="src/css"
JS_SRC_DIR="src/js"
DIST_DIR="dist"
CSS_DIST_DIR="$DIST_DIR/css"
JS_DIST_DIR="$DIST_DIR/js"
SRC_INDEX="src/index.js"
DIST_INDEX="$DIST_DIR/index.js"

# Check if the dist directory exists
if [ ! -d "$DIST_DIR" ]; then
    echo "$DIST_DIR directory does not exist. Creating now..."
    mkdir -p "$DIST_DIR"
    echo "$DIST_DIR directory created."
else
    echo "$DIST_DIR directory already exists."
fi

# Check if the dist/css directory exists
if [ ! -d "$CSS_DIST_DIR" ]; then
    echo "$CSS_DIST_DIR directory does not exist. Creating now..."
    mkdir -p "$CSS_DIST_DIR"
    echo "$CSS_DIST_DIR directory created."
else
    echo "$CSS_DIST_DIR directory already exists."
fi

# Check if the dist/js directory exists
if [ ! -d "$JS_DIST_DIR" ]; then
    echo "$JS_DIST_DIR directory does not exist. Creating now..."
    mkdir -p "$JS_DIST_DIR"
    echo "$JS_DIST_DIR directory created."
else
    echo "$JS_DIST_DIR directory already exists."
fi

# Find and minify all .css files in the src/css directory
for file in "$CSS_SRC_DIR"/*.css; do
    # Check if any .css files were found
    if [ -e "$file" ]; then
        # Extract the filename without the directory and extension
        filename=$(basename "$file" .css)
        # Run the minify command and save the output to the dist/css directory
        minify "$file" > "$CSS_DIST_DIR/$filename.min.css"
        echo "Minified $file to $CSS_DIST_DIR/$filename.min.css"
    else
        echo "No .css files found in $CSS_SRC_DIR"
    fi
done

# Find and minify all .js files in the src/js directory
for file in "$JS_SRC_DIR"/*.js; do
    # Check if any .js files were found
    if [ -e "$file" ]; then
        # Extract the filename without the directory and extension
        filename=$(basename "$file" .js)
        # Run the minify command and save the output to the dist/js directory
        uglifyjs "$file" -o "$JS_DIST_DIR/$filename.min.js"
        echo "Minified $file to $JS_DIST_DIR/$filename.min.js"
    else
        echo "No .js files found in $JS_SRC_DIR"
    fi
done

# Copy src/index.js to dist/index.js, replace "src/css/*.css" with "dist/css/*.min.css" and "src/js/*.js" with "dist/js/*.min.js"
if [ -e "$SRC_INDEX" ]; then
    cp "$SRC_INDEX" "$DIST_INDEX"
    sed -i 's/src\/css\/\([a-zA-Z0-9_-]*\)\.css/dist\/css\/\1.min.css/g' "$DIST_INDEX"
    sed -i 's/src\/js\/\([a-zA-Z0-9_-]*\)\.js/dist\/js\/\1.min.js/g' "$DIST_INDEX"
    echo "Copied $SRC_INDEX to $DIST_INDEX and replaced 'src/css/*.css' with 'dist/css/*.min.css' and 'src/js/*.js' with 'dist/js/*.min.js'."
else
    echo "$SRC_INDEX not found."
fi
