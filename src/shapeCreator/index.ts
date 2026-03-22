import { instantiateShapeFactory } from "./bootstrap";

const main = async () => {
    const factory = instantiateShapeFactory();
    const circle1 = factory.create({
        type: "circle",
        radius: 12,
    });
    console.log(circle1.description());

    const rect1 = factory.create({
        type: "rectangle",
        width: 10,
        height: 20,
    });
    console.log(rect1.description());

    const tria1 = factory.create({
        type: "triangle",
        a: 7,
        b: 16,
        c: 12,
    });
    console.log(tria1.description());
};

main();
