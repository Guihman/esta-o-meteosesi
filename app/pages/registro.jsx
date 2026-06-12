import { useState } from 'react';
import {
  Alert,
  ImageBackground,
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
import Logo from '../../assets/estacao.jpg';

export default function Registro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  const handleCadastro = () => {
    if (!email || !senha || !confSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos para continuar.');
      return;
    }

    if (senha !== confSenha) {
      Alert.alert('Atenção', 'As senhas precisam ser iguais.');
      return;
    }

    Alert.alert('Sucesso', 'Conta cadastrada com sucesso!');
    navigation.replace('Login');
  };

  return (
    <ImageBackground source={Logo} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardArea}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={20} color="#E0F2FE" />
              <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.card}>
              <View style={styles.iconBadge}>
                <Ionicons name="person-add-outline" size={30} color="#FBBF24" />
              </View>

              <Text style={styles.title}>Criar conta</Text>

              <Text style={styles.subtitle}>
                Cadastre seu acesso para registrar e visualizar as medições.
              </Text>

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
                  placeholder="Crie uma senha"
                  placeholderTextColor="#7FA9C7"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry
                />
              </View>

              <Text style={styles.label}>CONFIRMAR SENHA</Text>
              <View style={styles.inputBox}>
                <Ionicons name="shield-checkmark-outline" size={20} color="#7DD3FC" />
                <TextInput
                  style={styles.input}
                  placeholder="Repita a senha"
                  placeholderTextColor="#7FA9C7"
                  value={confSenha}
                  onChangeText={setConfSenha}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85} onPress={handleCadastro}>
                <Text style={styles.primaryButtonText}>Cadastrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                activeOpacity={0.85}
                onPress={() => navigation.replace('Login')}
              >
                <Text style={styles.secondaryButtonText}>Já tenho conta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    backgroundColor: 'rgba(2, 18, 33, 0.84)',
  },
  container: {
    flex: 1,
  },
  keyboardArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 22,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    marginBottom: 16,
    paddingVertical: 8,
  },
  backText: {
    color: '#E0F2FE',
    fontSize: 15,
    fontWeight: '700',
  },
  card: {
    backgroundColor: 'rgba(8, 31, 52, 0.95)',
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
  iconBadge: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: 'rgba(251, 191, 36, 0.13)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.26)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: '#93C5FD',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
    marginTop: 8,
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