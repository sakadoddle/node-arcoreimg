# node-arcoreimg

A very simple wrapper for [arcoreimg](https://developers.google.com/ar/develop/java/augmented-images/arcoreimg).

## Dependencies

- [Node.js](http://nodejs.org/)
- [arcoreimg](https://developers.google.com/ar/develop/java/augmented-images/arcoreimg)

## Installation

1. Install [arcoreimg](https://github.com/google-ar/sceneform-android-sdk).

2. Change permission of arcoreimg:

    ```
    sudo chmod +x arcoreimg
    ```

3. Set proper ENV PATH for arcoreimg

4. Install node-arcoreimg:

    ```
    npm install node-arcoreimg
    ```



## Usage

```
arcoreimg(image_path, callback);
```

## Examples

### Render and Save:

```
arcoreimg('https://raw.githubusercontent.com/google-ar/arcore-android-sdk/master/samples/augmented_image_c/app/src/main/assets/default.jpg', (data) => {
  console.log(data.value)
});
```
