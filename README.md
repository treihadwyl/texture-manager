# Treihadwyl Texture Manager

> Handles textures - getting, setting etc

## Installation

The texture manager is a self-registering singleton and can be referenced simply by requiring it.

```
var tm = require( 'texture-manager' );
```

## API

### save

Stores textures in the memory cache.

Generally this is called by the resource manager which is responsible for preparing the data for storing.

#### frame

```
tm.save.frame( filename, framename, data );
```

Stores frame data in the cache, creating a new `PIXI.texture` object whilst doing so.

```
{
  framename: <frame identifier>,
  texture: <PIXI.Texture>,
  data: <Specific frame data>
}
```

### get

#### frame

```
tm.get.frame( filename, framename );
```

Returns the object modelling a texture frame.

#### atlas

```
tm.get.atlas( filename );
```

Returns the entire texture atlas referenced by the file name identifier.
