const birdData = [
    {
        "name": "House Wren",
        "habitat": "Open, shrubby, or grassy areas, including gardens and parks in urban and suburban settings.",
        "food": "Mostly insects and spiders.",
        "nesting": "Cavities in trees, birdhouses, or other sheltered spots.",
        "behavior": "Very active and curious while foraging; often seen hopping around in vegetation.",
        "conservation": "Least Concern. Populations are stable.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/59860711-480px.jpg"
    },
    {
        "name": "Ring-necked Pheasant",
        "habitat": "Farmlands, grasslands, and wetlands.",
        "food": "Seeds, insects, and various plant matter.",
        "nesting": "On the ground, in dense grass or underbrush.",
        "behavior": "Ground forager but can fly short distances. Males are polygamous and perform elaborate displays.",
        "conservation": "Least Concern. Populations are managed for hunting in many areas.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/296747851-480px.jpg"
    },
    {
        "name": "Scaled Quail",
        "habitat": "Deserts, arid grasslands, and scrub areas.",
        "food": "Seeds, leaves, and some insects.",
        "nesting": "On the ground, hidden in grass or under a shrub.",
        "behavior": "Flocks move on the ground and can run quickly. They are more likely to run than fly when threatened.",
        "conservation": "Least Concern. However, populations are declining due to habitat loss.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/296734001-480px.jpg"
    },
    {
        "name": "Bald Eagle",
        "habitat": "Near large bodies of open water with abundant food and old-growth trees for nesting.",
        "food": "Mainly fish, but also waterfowl, small mammals, and carrion.",
        "nesting": "Large nests in tall trees or on cliff edges.",
        "behavior": "Soars and glides frequently. Very territorial during breeding season.",
        "conservation": "Least Concern. Populations have recovered significantly since the DDT ban.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/306062281-480px.jpg"
    },
    {
        "name": "White Ibis",
        "habitat": "Wetlands, swamps, marshes, and tidal flats.",
        "food": "Crustaceans, aquatic insects, small fish, and snails.",
        "nesting": "Colonies in trees or bushes near water.",
        "behavior": "Forages in shallow water by probing with its curved bill.",
        "conservation": "Least Concern. Widespread and abundant, though dependent on wetland habitats.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/70694471-480px.jpg"
    },
    {
        "name": "Pacific Loon",
        "habitat": "Northern lakes in summer; coastal waters in winter.",
        "food": "Fish and aquatic invertebrates.",
        "nesting": "Ground, near water.",
        "behavior": "Dives for food from the surface of the water.",
        "conservation": "Least Concern, though vulnerable to oil spills and pollution.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/308026491-480px.jpg"
    },
    {
        "name": "Gambel's Quail",
        "habitat": "Deserts and arid environments, often near water sources.",
        "food": "Seeds, leaves, and occasional insects.",
        "nesting": "On the ground, in dense vegetation or under a cactus.",
        "behavior": "Forms large coveys that forage together on the ground.",
        "conservation": "Least Concern, populations stable in appropriate habitats.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/296730461-480px.jpg"
    },
    {
        "name": "American Robin",
        "habitat": "Forests, gardens, parks, lawns across North America.",
        "food": "Worms, insects, and fruit.",
        "nesting": "Trees or shrubs, often quite low to the ground.",
        "behavior": "Ground forager that runs and stops to pull worms.",
        "conservation": "Least Concern, very common and widespread.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/303441381-480px.jpg"
    },
    {
        "name": "Tufted Titmouse",
        "habitat": "Deciduous and mixed forests, gardens, parks.",
        "food": "Insects, seeds, nuts, berries.",
        "nesting": "Cavities in trees, often uses nest boxes.",
        "behavior": "Active and noisy; often seen foraging in mixed flocks.",
        "conservation": "Least Concern, populations are stable or increasing.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/302627281-480px.jpg"
    },
    {
        "name": "Warbling Vireo",
        "habitat": "Woodlands, orchards, and parks.",
        "food": "Insects and fruit.",
        "nesting": "Small, cup-shaped nest in a tree branch.",
        "behavior": "Often stays hidden in foliage; recognized by its continuous warbling song.",
        "conservation": "Least Concern, common in its range.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/302322781-480px.jpg"
    },
    {
        "name": "Western Meadowlark",
        "habitat": "Grasslands, prairies, and fields.",
        "food": "Seeds and insects.",
        "nesting": "On the ground, in a well-hidden location.",
        "behavior": "Often seen perched on fence posts or low bushes, singing their melodious songs.",
        "conservation": "Near Threatened, with declines due to habitat loss.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/306332801-480px.jpg"
    },
    {
        "name": "White-breasted Nuthatch",
        "habitat": "Forests, woodlands, and urban parks with large trees.",
        "food": "Insects, seeds, and nuts.",
        "nesting": "Tree cavities or nest boxes.",
        "behavior": "Climbs tree trunks and branches, often upside down, foraging for insects under the bark.",
        "conservation": "Least Concern, populations stable.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/68039391-480px.jpg"
    },
    {
        "name": "American Dipper",
        "habitat": "Fast-flowing streams in western mountains.",
        "food": "Aquatic insects, small fish, and fish eggs.",
        "nesting": "On cliff ledges or bridges over water.",
        "behavior": "Unique among North American birds for its ability to dive and walk underwater.",
        "conservation": "Least Concern, stable but dependent on clean, fast-flowing rivers.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/606670751-480px.jpg"
    },
    {
        "name": "Glaucous-winged Gull",
        "habitat": "Coastlines, harbors, and landfills in the Pacific Northwest.",
        "food": "Fish, invertebrates, and human refuse.",
        "nesting": "Ground, often on islands or remote coastal areas.",
        "behavior": "Opportunistic feeder, often seen in large, noisy flocks.",
        "conservation": "Least Concern, populations stable.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/303388951-480px.jpg"
    },
    {
        "name": "Blue-gray Gnatcatcher",
        "habitat": "Deciduous forests, gardens, and parks.",
        "food": "Small insects and spiders.",
        "nesting": "A very small, cup-shaped nest in a tree or shrub.",
        "behavior": "Active and acrobatic forager, often seen flitting about in trees and shrubs.",
        "conservation": "Least Concern, populations are stable or increasing.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/308533151-480px.jpg"
    },
    {
        "name": "European Starling",
        "habitat": "Urban and suburban areas, farmlands, open woodlands.",
        "food": "Insects, fruits, seeds, and human scraps.",
        "nesting": "Cavities in trees or buildings, often in large colonies.",
        "behavior": "Highly social and often forms large flocks, especially in non-breeding season.",
        "conservation": "Least Concern, though considered an invasive species in North America.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/303928891-480px.jpg"
    },
    {
        "name": "Wild Turkey",
        "habitat": "Forests, woodlands, and edges; also adapting to suburban environments.",
        "food": "Acorns, nuts, seeds, fruits, insects, and small amphibians.",
        "nesting": "On the ground, hidden in dense brush or tall grass.",
        "behavior": "Forms flocks and feeds on the ground; males display large, fan-like tails to attract females.",
        "conservation": "Least Concern, populations have been successfully restored in many areas.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/311368611-480px.jpg"
    },
    {
        "name": "Lesser Black-backed Gull",
        "habitat": "Coasts, lakes, and urban areas; increasingly common in cities.",
        "food": "Fish, invertebrates, small birds, and garbage.",
        "nesting": "Colonies on the ground or rooftops.",
        "behavior": "Opportunistic, often seen scavenging; aggressive towards other birds when feeding.",
        "conservation": "Least Concern, populations increasing in North America.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/299868811-480px.jpg"
    },
    {
        "name": "Chipping Sparrow",
        "habitat": "Open woodlands, gardens, parks, and suburban areas.",
        "food": "Seeds, grains, and insects.",
        "nesting": "Trees or bushes, often low to the ground.",
        "behavior": "Forages on the ground in small flocks; often visits feeders.",
        "conservation": "Least Concern, common and widespread.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/64972021-480px.jpg"
    },
    {
        "name": "House Sparrow",
        "habitat": "Urban and suburban areas, farms, occasionally in woodlands.",
        "food": "Seeds, grains, insects, human food scraps.",
        "nesting": "Cavities in buildings, trees, or birdhouses.",
        "behavior": "Highly social; often found in large flocks, aggressive towards other bird species at feeders.",
        "conservation": "Least Concern, but populations have been declining in some urban areas.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/305880301-480px.jpg"
    },
    {
        "name": "Orange-crowned Warbler",
        "habitat": "Brushy areas and woodlands, especially during migration and winter.",
        "food": "Insects and some plant nectar.",
        "nesting": "On the ground or low in bushes.",
        "behavior": "Less conspicuous than many warblers; often forages within dense foliage.",
        "conservation": "Least Concern, widespread and common along migration routes.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/296785521-480px.jpg"
    },
    {
        "name": "Nashville Warbler",
        "habitat": "Open mixed woods and scrubby areas, particularly during migration.",
        "food": "Insects and spiders.",
        "nesting": "On the ground, hidden under vegetation.",
        "behavior": "Active forager, often seen hopping through low branches and undergrowth.",
        "conservation": "Least Concern, populations are stable.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/296807801-480px.jpg"
    },
    {
        "name": "Willet",
        "habitat": "Coastlines, mudflats, and salt marshes during breeding; more inland waters in winter.",
        "food": "Invertebrates, small fish, and crustaceans.",
        "nesting": "On the ground in sparse vegetation.",
        "behavior": "Probing the mud with its bill for food; distinctive loud call.",
        "conservation": "Least Concern, though some populations are declining.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/64838171-480px.jpg"
    },
    {
        "name": "Royal Tern",
        "habitat": "Coastal beaches, lagoons, and estuaries.",
        "food": "Fish and some invertebrates.",
        "nesting": "Ground nests in large colonies on sandy beaches or islands.",
        "behavior": "Dives for fish from the air; often seen in large flocks along the coast.",
        "conservation": "Least Concern, stable populations.",
        "imageURL": "https://www.allaboutbirds.org/guide/assets/photo/308468891-480px.jpg"
    }
];

// global variables to persist the filter options
let SORT_TYPE = "";
let SEARCH_BY = "";

// This function adds cards the page to display the data in the array
function renderBirds(sortType, searchBy) {
    if (sortType != "") {
        SORT_TYPE = sortType;
    } else {
        SEARCH_BY = searchBy.toLowerCase();
    }

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    let filteredData = [...birdData]; // Copy the birdData with spread operator
    if (SORT_TYPE == "aToZ") {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (SORT_TYPE  == "zToA") {
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    if (SEARCH_BY != "") {
        filteredData = filteredData.filter(bird => {
            let words = bird.name.toLowerCase().split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].startsWith(SEARCH_BY)) {
                    return true;
                }
            }
            return false;
        });
    }
    
    for (let i = 0; i < filteredData.length; i++) {
        const {
            name,
            habitat,
            food,
            nesting,
            behavior,
            conservation,
            imageURL
        } = filteredData[i];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, name, imageURL, habitat, food, nesting, behavior, conservation); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function addBullet(list, label, text) {
    const bullet = document.createElement("li");
    bullet.innerHTML = "<strong>" + label + ":</strong> " + text;
    list.appendChild(bullet);
}

function editCardContent(card, birdName, newImageURL, newHabitat, newFood, newNesting, newBehavior, newConservation) {
    card.style.display = "block";

    const cardHeader = card.querySelector(".birdName");
    cardHeader.textContent = birdName;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = birdName;
    
    const list = card.querySelector("ul");
    addBullet(list, "Habitat", newHabitat);
    addBullet(list, "Food", newFood);
    addBullet(list, "Nesting", newNesting);
    addBullet(list, "Behavior", newBehavior);
    addBullet(list, "Conservation", newConservation);

    console.log("added new bird card:", birdName, "- html: ", card);
}

function toggleCard(card) {
    const info = card.querySelector("ul");
    const img = card.querySelector("img");
    info.classList.toggle("hidden");
    img.classList.toggle("hidden");
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
    renderBirds("", "");
});
