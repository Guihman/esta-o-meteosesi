import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const dadosLinha = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      data: [39, 37, 33, 28, 27, 25],
      strokeWidth: 3,
    },
  ],
};

const dadosPizza = [
  {
    name: 'Jd Paulista',
    temp: 18,
    color: '#38BDF8',
    legendFontColor: '#E0F2FE',
    legendFontSize: 12,
  },
  {
    name: 'Portal dos Nobres',
    temp: 20,
    color: '#FBBF24',
    legendFontColor: '#E0F2FE',
    legendFontSize: 12,
  },
  {
    name: 'Três Pontes',
    temp: 15,
    color: '#22C55E',
    legendFontColor: '#E0F2FE',
    legendFontSize: 12,
  },
  {
    name: 'Alto da Boa Vista',
    temp: 15,
    color: '#F97316',
    legendFontColor: '#E0F2FE',
    legendFontSize: 12,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#081F34',
  backgroundGradientTo: '#081F34',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(56, 189, 248, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(224, 242, 254, ${opacity})`,
  propsForDots: {
    r: '5',
    strokeWidth: '2',
    stroke: '#FBBF24',
  },
  propsForBackgroundLines: {
    stroke: 'rgba(224, 242, 254, 0.15)',
  },
};

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Estação Meteorológica</Text>
          <Text style={styles.subtitulo}>Sesi Mirandópolis</Text>
        </View>

        <View style={styles.iconBox}>
          <Ionicons name="partly-sunny-outline" size={32} color="#FBBF24" />
        </View>
      </View>

      <View style={styles.cardsArea}>
        <View style={styles.card}>
          <Ionicons name="thermometer-outline" size={28} color="#FBBF24" />
          <Text style={styles.cardValor}>25°C</Text>
          <Text style={styles.cardTexto}>Temperatura</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="water-outline" size={28} color="#38BDF8" />
          <Text style={styles.cardValor}>60%</Text>
          <Text style={styles.cardTexto}>Umidade</Text>
        </View>
      </View>

      <View style={styles.cardsArea}>
        <View style={styles.card}>
          <Ionicons name="speedometer-outline" size={28} color="#22C55E" />
          <Text style={styles.cardValor}>12 km/h</Text>
          <Text style={styles.cardTexto}>Vento</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="body-outline" size={28} color="#F97316" />
          <Text style={styles.cardValor}>27°C</Text>
          <Text style={styles.cardTexto}>Sensação</Text>
        </View>
      </View>

      <View style={styles.bloco}>
        <View style={styles.blocoHeader}>
          <Text style={styles.blocoTitulo}>Gráfico de temperatura</Text>
          <Ionicons name="analytics-outline" size={24} color="#38BDF8" />
        </View>

        <Text style={styles.blocoSubtitulo}>Temperatura média dos últimos meses</Text>

        <LineChart
          data={dadosLinha}
          width={width - 48}
          height={230}
          chartConfig={chartConfig}
          bezier
          style={styles.grafico}
        />
      </View>

      <View style={styles.bloco}>
        <View style={styles.blocoHeader}>
          <Text style={styles.blocoTitulo}>Temperatura por bairro</Text>
          <Ionicons name="pie-chart-outline" size={24} color="#38BDF8" />
        </View>

        <Text style={styles.blocoSubtitulo}>Comparação entre bairros monitorados</Text>

        <PieChart
          data={dadosPizza}
          width={width - 48}
          height={230}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="12"
          absolute
        />
      </View>

      <View style={styles.bloco}>
        <View style={styles.blocoHeader}>
          <Text style={styles.blocoTitulo}>Últimas medições</Text>
          <Ionicons name="time-outline" size={24} color="#38BDF8" />
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>12/06/2026</Text>
          <Text style={styles.medicaoValor}>25°C</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>11/06/2026</Text>
          <Text style={styles.medicaoValor}>22°C</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>12/06/2026</Text>
          <Text style={styles.medicaoValor}>60%</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>11/06/2026</Text>
          <Text style={styles.medicaoValor}>80%</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021221',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#081F34',
    borderRadius: 28,
    padding: 22,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.18)',
  },
  titulo: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '900',
  },
  subtitulo: {
    color: '#7DD3FC',
    fontSize: 15,
    marginTop: 4,
    fontWeight: '700',
  },
  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: 'rgba(251, 191, 36, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#081F34',
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.16)',
  },
  cardValor: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 12,
  },
  cardTexto: {
    color: '#93C5FD',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '700',
  },
  bloco: {
    backgroundColor: '#081F34',
    borderRadius: 28,
    padding: 14,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.16)',
    overflow: 'hidden',
  },
  blocoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blocoTitulo: {
    color: '#F8FAFC',
    fontSize: 19,
    fontWeight: '900',
  },
  blocoSubtitulo: {
    color: '#93C5FD',
    fontSize: 13,
    marginTop: 4,
    marginBottom: 12,
  },
  grafico: {
    borderRadius: 20,
    marginLeft: -8,
  },
  medicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(125, 211, 252, 0.12)',
    paddingVertical: 13,
  },
  medicaoTexto: {
    color: '#BAE6FD',
    fontSize: 15,
    fontWeight: '700',
  },
  medicaoValor: {
    color: '#FBBF24',
    fontSize: 16,
    fontWeight: '900',
  },
});