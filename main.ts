scene.setBackgroundImage(assets.image`background1`)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`plane0`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(assets.image`boca1`, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
let mySprite3 = sprites.create(assets.image`barriga1`, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile0`)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x + 40, mySprite.y)
})
