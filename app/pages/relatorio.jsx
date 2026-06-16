import { FlatList, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const medicoes = [
  {
    id: 1,
    temp: 30,
    hum: 50,
    vento: 20,
    mes: 'Jan',
  },
  {
    id: 2,
    temp: 32,
    hum: 45,
    vento: 27,
    mes: 'Fev',
  },
  {
    id: 3,
    temp: 19,
    hum: 58,
    vento: 18,
    mes: 'Mar',
  },
  {
    id: 4,
    temp: 26,
    hum: 70,
    vento: 28,
    mes: 'Abr',
  },
];

function ItemLista({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="calendar-outline" size={22} color="#FBBF24" />
        <Text style={styles.mes}>Mês: {item.mes}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="thermometer-outline" size={20} color="#F97316" />
        <Text style={styles.info}>Temperatura: {item.temp}°C</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="water-outline" size={20} color="#38BDF8" />
        <Text style={styles.info}>Umidade: {item.hum}%</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="speedometer-outline" size={20} color="#22C55E" />
        <Text style={styles.info}>Vento: {item.vento} km/h</Text>
      </View>
    </View>
  );
}

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Ionicons
            name="document-text-outline"
            size={32}
            color="#FBBF24"
          />
        </View>

        <View>
          <Text style={styles.title}>Relatório Meteorológico</Text>
          <Text style={styles.subtitle}>
            Histórico das medições registradas
          </Text>
        </View>
      </View>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemLista item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021221',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: 'rgba(251,191,36,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  title: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: '900',
  },

  subtitle: {
    color: '#93C5FD',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#0B2942',
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(125,211,252,0.18)',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  mes: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  info: {
    color: '#E0F2FE',
    fontSize: 15,
    marginLeft: 10,
  },
});