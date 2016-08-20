module.exports = { 
  simbolo: 'Na', 
  nome: 'Sódio',
  numeroAtomico: 11,
  familia: {
    {      
      coluna: '1'
    }, 
    {
      grupo: '1A'
    }, 
    {
      descritiva: 'Metal alcalino'
    }
  }, 
  periodo: 2, 
  numero: {
    eletrons: 11,
    neutrons: 11,
    protons: 11
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2, p: 6
    },
    m: {
      s: 1, p: 0, d: 0
    },
    n: {
      s: 0, p: 0, d: 0, f: 0
    },
    o: {
      s: 0, p: 0, d: 0, f: 0
    },
    p: { 
      s: 0, p: 0, d: 0
    },
    q: {
      s: 0, p: 0
    }
  },
  propriedades: {
    fisicas: {
      densidade: {
        valor: 0.0899, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'gasoso' 
      },
      raioAtomico: {
        valor: 53, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 1.00797, 
        unidade: 'u'
      }
    },
    quimicas: {
      meiaVida: require('property-meiavida-h'),
      estadoOxidacao: require('property-estado-oxidacao-h'),
      estruturaCristalina: require('property-estrutura-cristalina-h'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
      pontoFusao: {
        valor: 14.025, 
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {   
        valor: 20.268, 
        unidade: require('unity-k').unidade
      },
      energiaIonizacao: {   
        valor: 1312, 
        unidade: require('unity-kjXmol-1').unidade
      },
      raioCovalente: {   
        valor: 12.3, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 120, 
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {   
        valor: 0.05868, 
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {   
        valor: 0.44936, 
        unidade: require('unity-kjXmol-1').unidade
      },
      volumeMolar: {   
        valor: 0.0000114, 
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 209, 
          unidade: require('unity-pa').unidade,
        },
        temperatura: {
          valor: 23, 
          unidade: require('unity-k').unidade,
        }
      },
      calorEspecífico: {   
        valor: 14304, 
        unidade: 'J/(kg·K)'
      },
      condutividadeEletrica: {   
        valor: 106, 
        unidade: 'S/m'
      },
      condutividadeTermica: {
        valor: 0.1815,
        unidade: 'W/(m·K)'
      } 
    }
  }
}