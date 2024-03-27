import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { FontAwesome6 } from "@expo/vector-icons";
import CustomTabBarBottom from "../components/CustomTabBarBottom";
import { CustomHeader } from "../components/CustomHeader";

export type RootTabParamList = {
  Home: undefined;
  Favorite: undefined;
}

export type RootTabRouteProps<T extends keyof RootTabParamList> = RouteProp<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppRoutes() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () => <CustomHeader />,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <FontAwesome6 name="github" color={color} size={size} />;
            case 'Favorite':
              return <FontAwesome6 name="star" color={color} size={size} />;
            default:
              return null;
          }
        },
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        tabBarButton: props => <CustomTabBarBottom routeName={route.name} {...props}/>,
        tabBarStyle: { height: 56 }
      })}

    >

      <Tab.Screen  
        name="Home" 
        component={Home} 
        options={{
          headerTransparent: true
        }}
      />
      
    </Tab.Navigator>
  )

}