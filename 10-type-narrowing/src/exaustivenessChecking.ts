// Each shape has a unique "kind" tag.
// This tag is used by TypeScript to know which exact type it is.

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    breadth: number;
}

interface Pallelogram {
    kind: "pallelogram";
    length: number;
    breadth: number;
}

// Union of all shape types
type Shape = Circle | Square | Rectangle | Pallelogram;



// ---------------- EXHAUSTIVENESS CHECKING ---------------- //

function getArea2(shape: Shape): number {
    switch (shape.kind) {

        case "circle":
            // Inside this block, TypeScript knows shape is Circle
            return Math.PI * (shape.radius ** 2);

        case "square":
            // Here TS knows shape is Square
            return (shape.side ** 2);

        case "rectangle":
            // TS knows shape is Rectangle
            return shape.length * shape.breadth;

        // ❌ NOTICE: pallelogram case is missing!

        default:
            /**
             * The purpose of this variable:
             * 
             * 1. `never` means "this should NEVER happen".
             * 
             * 2. If all possible `shape.kind` values are handled above,
             *    then by the time code reaches `default`, `shape`
             *    will be of type `never`.
             * 
             * 3. BUT if ANY shape type is NOT handled (like "pallelogram"),
             *    then `shape` will NOT be `never` here.
             * 
             * 4. So TypeScript throws an error:
             *
             *      Type 'Pallelogram' is not assignable to type 'never'
             * 
             *    This ERROR warns you that you forgot a case.
             */
            const exhaustivenessCheck: never = shape;

            // This is just to satisfy return type.
            return exhaustivenessCheck;
    }
}
