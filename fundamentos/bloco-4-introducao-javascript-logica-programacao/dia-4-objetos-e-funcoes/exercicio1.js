let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
}

for (let properties in info) {
  if (properties === 'recorrente' &&
    info.recorrente === 'sim' &&
  info2.recorrente === 'sim')
  {console.log("Ambos recorrentes")
  } else {
    console.log(info[properties], "e", info2[properties])
  }
}