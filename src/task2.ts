type RGBColor = [number, number, number]
enum ColorName {
  red,
  green,
  blue
}

function rgbToHex(color: RGBColor): string
{
    for (let i = 0; i < 3; i++)
    {
        if (Math.round(color[i]) != color[i] || color[i] < 0 || color[i] >= 256)
            throw RangeError("RGBColor(" + color[0].toString() + ", " + color[1].toString() + ", " + color[2].toString() + ")");
    }
    let r = "#";
    for (let i = 0; i < 3; i++)
    {
        const t = color[i].toString(16);
        if (t.length == 1)
            r += "0" + t;
        else
            r += t;
    }
    return r;
}

function colorNameDesc(color: ColorName): object
{
    let v : RGBColor = [0, 0, 0];
    switch (color)
    {
        case ColorName.red:
            v = [255, 0, 0]
        break;
        case ColorName.green:
            v = [0, 255, 0]
        break;
        case ColorName.blue:
            v = [0, 0, 255]
        break;
        default:
            const nv : never = color;
        break;
    }
    return { rgb: v, hex: rgbToHex(v) };
}

console.log("rgbToHex([3, 109, 25])")
console.log(rgbToHex([3, 109, 25]))
console.log("rgbToHex([-2, 0.5, 257])")
try
{
    console.log(rgbToHex([-2, 0.5, 257]))
}
catch (e)
{
    console.log(e)
}

console.log("colorNameDesc(ColorName.red)")
console.log(colorNameDesc(ColorName.red))
console.log("colorNameDesc(ColorName.green)")
console.log(colorNameDesc(ColorName.green))
console.log("colorNameDesc(ColorName.blue)")
console.log(colorNameDesc(ColorName.blue))