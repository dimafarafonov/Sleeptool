RUN_EMULATOR="emulator -avd Nexus_5X_API_23 -netdelay none -netspeed full" #could use for run emulator wiith different network settings
RUN_ANDROID_APP="npx react-native run-android"
eval $RUN_EMULATOR 
eval $RUN_ANDROID_APP