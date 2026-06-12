import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [kmVento, setKmVento] = useState('');

  const handleSalvar = () => {
    if (!temp || !hum || !kmVento) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de salvar.');
      return;
    }

    Alert.alert('Medição salva', 'Os dados climáticos foram registrados com sucesso.');
    setTemp('');
    setHum('');
    setKmVento('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardArea}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.headerCard}>
            <View style={styles.iconBadge}>
              <Ionicons name="cloud-upload-outline" size={30} color="#FBBF24" />
            </View>

            <View style={styles.headerTextBox}>
              <Text style={styles.kicker}>NOVA MEDIÇÃO</Text>
              <Text style={styles.title}>Registrar clima</Text>

              <Text style={styles.subtitle}>
                Adicione temperatura, umidade e vento coletados pela estação.
              </Text>
            </View>
          </View>

          <View style={styles.formCard}>
            <Field
              label="TEMPERATURA"
              icon="thermometer-outline"
              placeholder="Ex: 25"
              value={temp}
              onChangeText={setTemp}
              unit="°C"
            />

            <Field
              label="UMIDADE"
              icon="water-outline"
              placeholder="Ex: 60"
              value={hum}
              onChangeText={setHum}
              unit="%"
            />

            <Field
              label="VELOCIDADE DO VENTO"
              icon="speedometer-outline"
              placeholder="Ex: 12"
              value={kmVento}
              onChangeText={setKmVento}
              unit="km/h"
            />

            <View style={styles.previewCard}>
              <Text style={styles.previewTitle}>Resumo</Text>

              <View style={styles.previewRow}>
                <Text style={styles.previewText}>Temperatura</Text>
                <Text style={styles.previewValue}>{temp || '--'}°C</Text>
              </View>

              <View style={styles.previewRow}>
                <Text style={styles.previewText}>Umidade</Text>
                <Text style={styles.previewValue}>{hum || '--'}%</Text>
              </View>

              <View style={styles.previewRow}>
                <Text style={styles.previewText}>Vento</Text>
                <Text style={styles.previewValue}>{kmVento || '--'} km/h</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.86} onPress={handleSalvar}>
              <Text style={styles.buttonText}>Salvar medição</Text>
              <Ionicons name="checkmark-circle" size={20} color="#06233A" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Field({ label, icon, placeholder, value, onChangeText, unit }) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputBox}>
        <Ionicons name={icon} size={21} color="#7DD3FC" />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#6E9AB8"
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
        />

        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021221',
  },
  keyboardArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 36,
  },
  headerCard: {
    backgroundColor: '#0B2942',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.16)',
    flexDirection: 'row',
    gap: 14,
    marginBottom: 16,
  },
  iconBadge: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: 'rgba(251, 191, 36, 0.13)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextBox: {
    flex: 1,
  },
  kicker: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -0.4,
  },
  subtitle: {
    color: '#93C5FD',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
  },
  formCard: {
    backgroundColor: '#081F34',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.16)',
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#7DD3FC',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#021221',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.16)',
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    color: '#F8FAFC',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  unit: {
    color: '#FBBF24',
    fontSize: 13,
    fontWeight: '900',
  },
  previewCard: {
    backgroundColor: '#0B2942',
    borderRadius: 22,
    padding: 16,
    marginTop: 4,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.12)',
  },
  previewTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 12,
  },
  previewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  previewText: {
    color: '#93C5FD',
    fontSize: 14,
  },
  previewValue: {
    color: '#E0F2FE',
    fontSize: 15,
    fontWeight: '900',
  },
  button: {
    minHeight: 54,
    backgroundColor: '#38BDF8',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    color: '#06233A',
    fontSize: 16,
    fontWeight: '900',
  },
});