import { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../assets/estacao.jpg';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ImageBackground source={Logo} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardArea}
        >
          <View style={styles.hero}>
            <View style={styles.logoBadge}>
              <Ionicons name="partly-sunny-outline" size={34} color="#FBBF24" />
            </View>

            <Text style={styles.appName}>MeteoSesi</Text>

            <Text style={styles.heroText}>
              Monitoramento climático inteligente para Mirandópolis
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Bem-vindo de volta</Text>
            <Text style={styles.subtitle}>Entre para acompanhar os dados da estação.</Text>

            <Text style={styles.label}>E-MAIL</Text>
            <View style={styles.inputBox}>
              <Ionicons name="mail-outline" size={20} color="#7DD3FC" />
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#7FA9C7"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.label}>SENHA</Text>
            <View style={styles.inputBox}>
              <Ionicons name="lock-closed-outline" size={20} color="#7DD3FC" />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#7FA9C7"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.85}
              onPress={() => navigation.replace('Principal')}
            >
              <Text style={styles.primaryButtonText}>Entrar</Text>
              <Ionicons name="arrow-forward" size={18} color="#06233A" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Registro')}
            >
              <Text style={styles.secondaryButtonText}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 18, 33, 0.82)',
  },
  container: {
    flex: 1,
  },
  keyboardArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingBottom: 26,
    paddingTop: 28,
  },
  hero: {
    paddingTop: 24,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: 'rgba(14, 165, 233, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  appName: {
    color: '#F8FAFC',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1,
  },
  heroText: {
    color: '#BAE6FD',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    maxWidth: 300,
  },
  card: {
    backgroundColor: 'rgba(8, 31, 52, 0.94)',
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.22)',
    borderRadius: 30,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    color: '#93C5FD',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 22,
    marginTop: 6,
  },
  label: {
    color: '#7DD3FC',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 18, 33, 0.72)',
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.18)',
    borderRadius: 18,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: '#F8FAFC',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  primaryButton: {
    minHeight: 52,
    borderRadius: 18,
    backgroundColor: '#38BDF8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  primaryButtonText: {
    color: '#06233A',
    fontSize: 16,
    fontWeight: '900',
  },
  secondaryButton: {
    minHeight: 50,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(125, 211, 252, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#BAE6FD',
    fontSize: 15,
    fontWeight: '800',
  },
});