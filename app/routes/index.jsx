import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Registro from '../pages/registro';

const Stack = createStackNavigator();
const Draw = createDrawerNavigator();

function MenuSuperior() {
  return (
    <Draw.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#081F34',
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#E0F2FE',
        headerTitleStyle: {
          fontWeight: '900',
        },
        drawerStyle: {
          backgroundColor: '#021221',
          width: 280,
        },
        drawerActiveTintColor: '#38BDF8',
        drawerInactiveTintColor: '#93C5FD',
        drawerActiveBackgroundColor: 'rgba(56, 189, 248, 0.14)',
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '800',
        },
        drawerIcon: ({ color, size, focused }) => {
          let nomeIcone = focused ? 'grid' : 'grid-outline';

          if (route.name === 'Dashboard') {
            nomeIcone = focused ? 'home' : 'home-outline';
          }

          if (route.name === 'Nova medição') {
            nomeIcone = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
      })}
    >
      <Draw.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'MeteoSesi' }}
      />

      <Draw.Screen
        name="Nova medição"
        component={Cadastro}
        options={{ title: 'Nova medição' }}
      />
    </Draw.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Principal" component={MenuSuperior} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}