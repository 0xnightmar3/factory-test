import { buildAnimalService } from "./bootstrap";

const main = async () => {
    const animalService = buildAnimalService();

    const sound = animalService.makeSound("cat");
    console.log(sound);
};

main();
