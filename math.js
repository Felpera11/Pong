/**Returns a new vector2 with values clamped */
function clampPosition(n, size, maxH) {
    clamped = new vector2(n.x, n.y);

    if (n.y < 0) {
        clamped.y = 0;
    }
    if (n.y + size.y > maxH) {
        clamped.y = maxH - size.y;
    }

    return clamped;
}

/**Vector with x and y values */
class vector2
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }

    add(vec2)
    {
        return new vector2(
        this.x += vec2.x,
        this.y += vec2.y);
    }
    subtract(vec2)
    {
        return new vector2(
            this.x -= vec2.x,
            this.y -= vec2.y);
    }
    equals(vec2)
    {
        return this.x == vec2.x && this.y == vec2.y;
    }
}