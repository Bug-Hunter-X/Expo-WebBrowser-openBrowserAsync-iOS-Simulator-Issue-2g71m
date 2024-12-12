import * as Linking from 'expo-linking';

// ... other code ...

async function handlePress() {
  let result = await Linking.openURL('https://example.com');
  console.log(result);
}

// ... other code ...