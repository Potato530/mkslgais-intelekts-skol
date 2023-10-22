// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006090b0404040404040404040403060908070b1212010101010101010103080704040a121212011212121201010204050d1212121212011201011212121212100d1201010101011201010101010112100d1201120112121212121212120101100d12011201120f0e110c1212121212100d12011201121006090d1212010101100d12011201010308070b1212011212100d12011212120204050a1212011201100d1201010101010101010101011201100d1212120112121212011212121201100d0101120112121212011201010101100e0e0c120101141212011201010f0e0e06090d1212121212120112010103060908070d0e0e0e0e0e0e130e0e0e030807`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 . . . . . . . . 2 . . 
2 2 2 2 2 2 . 2 2 2 2 . . 2 2 2 
2 2 2 2 2 2 . 2 . . 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 2 . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 2 . 2 . 2 . . . . . 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . . . . . . . . . . . 2 . 2 
2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 2 
2 . . 2 . 2 2 2 2 . 2 . . . . 2 
2 2 2 2 . . . 2 2 . 2 . . 2 2 2 
. . 2 2 2 2 2 2 2 . 2 . . 2 . . 
. . 2 2 2 2 2 2 2 . 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.floorDark2,sprites.dungeon.stairSouth,sprites.dungeon.stairWest], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000108080808080808080409090909090905090909090909090907090909090909050909090909090909070909090909090509090909090909090709090909090905090909090909090907090909090909050909090909090909070909090909090509090909090909090709090909090903060606060606060602090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090a0a0a0a0a0a0a0a0a0a0a0909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909`, img`
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
