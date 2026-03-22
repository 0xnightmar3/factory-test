import { buildAnimalService } from "./bootstrap";

const main = async () => {
    const animalService = buildAnimalService();

    const sound = animalService.makeSound("cat");
    console.log(sound);

    const dogSound = animalService.makeSound("dog");
    console.log(dogSound);

    const cowSound = animalService.makeSound("cow");
    console.log(cowSound);
};

main();
