export interface Ingredient {
  name: string;
  count: number;
}

export interface Recipe {
  title: string;
  time_cooking: string;
  description: string;
  steps: string[];
  ingredients: Ingredient[];
}

export const recipeBook: Recipe[] = [
    {
      title: 'Картошка с котлеткой',
      time_cooking: "45 минут",
      description: "Очень вкусно!",
      steps: ["Свари картошку", "Пожарь котлету"],
      ingredients: [
        {
          name: "картошка",
          count: 3}, 
        {
          name: "котлета",
          count: 5
        }
      ]
    },
    {
      title: 'Пельмени',
      time_cooking: "10-15 минут",
      description: "Со сметанкой вкуснее!",
      steps: ["Возьми пельмени", "Кинь в кипящую воду и вари 5 миинут", "Добавь соль, перец по вкусу"],
      ingredients: [
        {
          name: "пельмени",
          count: 1
        }
      ]
    },
    {
      title: "Печенье 'Кокосанка'",
      time_cooking: "30-35 минут",
      description: "Больше кокоса!",
      steps: ["Смешиваем тесто со стружкой", "Разогреваем духовку", "Ставим готовиться на 180 градусов"],
      ingredients: [
        {
          name: "Кокосовая стружка",
          count: 1
        },
        {
          name: "Тесто",
          count: 1
        }
      ]
    }
  ]