The solution involves requesting camera permissions explicitly and handling the user's response. If permission is granted, proceed with using the camera. Otherwise, display an appropriate message or handle the denial gracefully.  Here's how to implement this:

```javascript
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        {/* Camera controls here */}
      </Camera>
    </View>
  );
};
export default CameraScreen;
```