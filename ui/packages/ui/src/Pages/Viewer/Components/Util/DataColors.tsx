import { Colors } from "@blueprintjs/core";
import { scaleOrdinal } from "@visx/scale";

function safeGet(colors: string[], i: number) {
  return colors[i % colors.length];
}

type ActionColor = {
  highlight: string;
  label: string;
  value: string;
}

const actions: Map<string, ActionColor> = new Map([
  ["normal", {
    highlight: Colors.CERULEAN5,
    label:  Colors.CERULEAN4,
    value: Colors.CERULEAN3
  }],
  ["charge", {
    highlight: Colors.FOREST5,
    label:  Colors.FOREST4,
    value:  Colors.FOREST3,
  }],
  ["aim", {
    highlight: Colors.GOLD5,
    label:  Colors.GOLD4,
    value:  Colors.GOLD3,
  }],
  ["skill", {
    highlight: Colors.VERMILION5,
    label:  Colors.VERMILION4,
    value: Colors.VERMILION3
  }],
  ["burst", {
    highlight: Colors.VIOLET5,
    label:  Colors.VIOLET4,
    value: Colors.VIOLET3
  }],
  ["low_plunge", {
    highlight: Colors.TURQUOISE5,
    label:  Colors.TURQUOISE4,
    value: Colors.TURQUOISE3
  }],
  ["high_plunge", {
    highlight: Colors.ROSE5,
    label:  Colors.ROSE4,
    value: Colors.ROSE3
  }],
  ["dash", {
    highlight: Colors.LIME5,
    label:  Colors.LIME4,
    value: Colors.LIME3
  }],
  ["jump", {
    highlight: Colors.SEPIA5,
    label:  Colors.SEPIA4,
    value: Colors.SEPIA3
  }],
  ["walk", {
    highlight: Colors.INDIGO5,
    label:  Colors.INDIGO4,
    value: Colors.INDIGO3
  }],
  ["swap", {
    highlight: Colors.ORANGE5,
    label:  Colors.ORANGE4,
    value: Colors.ORANGE3
  }]
]);

const actionColor = scaleOrdinal<string, string>({
  domain: Array.from(actions.keys()),
  range: Array.from(actions.values()).map(e => e.value),
});

const actionLabelColor = scaleOrdinal<string, string>({
  domain: Array.from(actions.keys()),
  range: Array.from(actions.values()).map(e => e.label),
});

const actionHighlightColor = scaleOrdinal<string, string>({
  domain: Array.from(actions.keys()),
  range: Array.from(actions.values()).map(e => e.highlight),
});


type ElementColor = {
  label: string;
  highlight: string;
  value: string;
}

const elements: Map<string, ElementColor> = new Map([
  ["electro", {
    highlight: Colors.VIOLET5,
    label: Colors.VIOLET4, 
    value: Colors.VIOLET3
  }],
  ["pyro", {
    highlight: Colors.VERMILION5,
    label: Colors.VERMILION4,
    value: Colors.VERMILION3
  }],
  ["cryo", {
    highlight: "#FFF",
    label: "#95CACB",
    value: "#4B8DAA"
  }],
  ["hydro", {
    highlight: Colors.CERULEAN5,
    label: Colors.CERULEAN4,
    value: Colors.CERULEAN3
  }],
  ["dendro", {
    highlight: Colors.FOREST5,
    label: Colors.FOREST4,
    value: Colors.FOREST3
  }],
  ["anemo", {
    highlight: Colors.TURQUOISE5,
    label: Colors.TURQUOISE4,
    value: Colors.TURQUOISE3
  }],
  ["geo", {
    highlight: Colors.GOLD5,
    label: Colors.GOLD4,
    value: Colors.GOLD3
  }],
  ["physical", {
    highlight: Colors.SEPIA5,
    label: Colors.SEPIA4,
    value: Colors.SEPIA3
  }],

  // not possible, but defined in attributes/element.go so here just in case
  ["frozen", { highlight: "#000", label: "#000", value: "#000" }],
  ["quicken", { highlight: "#FFF", label: "#FFF", value: "#FFF" }],
]);

const elementColor = scaleOrdinal<string, string>({
  domain: Array.from(elements.keys()),
  range: Array.from(elements.values()).map(e => e.value),
});

const elementLabelColor = scaleOrdinal<string, string>({
  domain: Array.from(elements.keys()),
  range: Array.from(elements.values()).map(e => e.label),
});

const elementHighlightColor = scaleOrdinal<string, string>({
  domain: Array.from(elements.keys()),
  range: Array.from(elements.values()).map(e => e.highlight),
});

const reactableModifiers: Map<string, ElementColor> = new Map([
  ["electro", {
    highlight: Colors.VIOLET5,
    label: Colors.VIOLET4, 
    value: Colors.VIOLET3
  }],
  ["pyro", {
    highlight: Colors.VERMILION5,
    label: Colors.VERMILION4,
    value: Colors.VERMILION3
  }],
  ["cryo", {
    highlight: "#FFF",
    label: "#95CACB",
    value: "#4B8DAA"
  }],
  ["hydro", {
    highlight: Colors.CERULEAN5,
    label: Colors.CERULEAN4,
    value: Colors.CERULEAN3
  }],
  ["dendro", {
    highlight: Colors.FOREST5,
    label: Colors.FOREST4,
    value: Colors.FOREST3
  }],
  ["anemo", {
    highlight: Colors.TURQUOISE5,
    label: Colors.TURQUOISE4,
    value: Colors.TURQUOISE3
  }],
  ["geo", {
    highlight: Colors.GOLD5,
    label: Colors.GOLD4,
    value: Colors.GOLD3
  }],
  ["frozen", { 
    highlight: Colors.TURQUOISE5, 
    label: Colors.TURQUOISE4, 
    value: Colors.TURQUOISE3
  }],
  ["quicken", { 
    highlight: Colors.GREEN5,
    label: Colors.GREEN4,
    value: Colors.GREEN3
  }],
  ["dendro (fuel)", {
    highlight: Colors.LIME5,
    label: Colors.LIME4,
    value: Colors.LIME3
  }],
  ["burning", {
    highlight: Colors.RED5,
    label: Colors.RED4,
    value: Colors.RED3
  }],
]);

const reactableModifierColor = scaleOrdinal<string, string>({
  domain: Array.from(reactableModifiers.keys()),
  range: Array.from(reactableModifiers.values()).map(e => e.value),
});

const reactableModifierLabelColor = scaleOrdinal<string, string>({
  domain: Array.from(reactableModifiers.keys()),
  range: Array.from(reactableModifiers.values()).map(e => e.label),
});

const reactableModifierHighlightColor = scaleOrdinal<string, string>({
  domain: Array.from(reactableModifiers.keys()),
  range: Array.from(reactableModifiers.values()).map(e => e.highlight),
});

// Qualitative follows a specific order defined by bp4 to maximize distinction
const qualitative1 = [
  Colors.CERULEAN1,
  Colors.FOREST1,
  Colors.GOLD1,
  Colors.VERMILION1,
  Colors.VIOLET1,
  Colors.TURQUOISE1,
  Colors.ROSE1,
  Colors.LIME1,
  Colors.SEPIA1,
  Colors.INDIGO1,
];

const qualitative2 = [
  Colors.CERULEAN2,
  Colors.FOREST2,
  Colors.GOLD2,
  Colors.VERMILION2,
  Colors.VIOLET2,
  Colors.TURQUOISE2,
  Colors.ROSE2,
  Colors.LIME2,
  Colors.SEPIA2,
  Colors.INDIGO2,
];

const qualitative3 = [
  Colors.CERULEAN3,
  Colors.FOREST3,
  Colors.GOLD3,
  Colors.VERMILION3,
  Colors.VIOLET3,
  Colors.TURQUOISE3,
  Colors.ROSE3,
  Colors.LIME3,
  Colors.SEPIA3,
  Colors.INDIGO3,
];

const qualitative4 = [
  Colors.CERULEAN4,
  Colors.FOREST4,
  Colors.GOLD4,
  Colors.VERMILION4,
  Colors.VIOLET4,
  Colors.TURQUOISE4,
  Colors.ROSE4,
  Colors.LIME4,
  Colors.SEPIA4,
  Colors.INDIGO4,
];

const qualitative5 = [
  Colors.CERULEAN5,
  Colors.FOREST5,
  Colors.GOLD5,
  Colors.VERMILION5,
  Colors.VIOLET5,
  Colors.TURQUOISE5,
  Colors.ROSE5,
  Colors.LIME5,
  Colors.SEPIA5,
  Colors.INDIGO5,
];

export const DataColors = {
  gray: "#9ca3af", // same as tailwind gray-400

  reactableModifierKeys: [...reactableModifiers.keys()],
  reactableModifier: reactableModifierColor,
  reactableModifierLabel: reactableModifierLabelColor,
  reactableModifierHighlight: reactableModifierHighlightColor,

  actionKeys: [...actions.keys()],
  action: actionColor,
  actionLabel: actionLabelColor,
  actionHighlight: actionHighlightColor,

  element: elementColor,
  elementLabel: elementLabelColor,
  elementHighlight: elementHighlightColor,
  
  // TODO: better colors for characters?
  character: (i: number) => qualitative3[i],
  characterLabel: (i: number) => qualitative4[i],

  target: (k: string) => qualitative3[Number(k)-1],
  targetLabel: (k: string) => qualitative4[Number(k)-1],

  qualitative1: (i: number) => safeGet(qualitative1, i),
  qualitative2: (i: number) => safeGet(qualitative2, i),
  qualitative3: (i: number) => safeGet(qualitative3, i),
  qualitative4: (i: number) => safeGet(qualitative4, i),
  qualitative5: (i: number) => safeGet(qualitative5, i),
};