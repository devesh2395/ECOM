package com.dotlinks;

import android.os.Build;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import expo.modules.ReactActivityDelegateWrapper;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    //sdk object
    TruecallerSdkScope trueScope = new TruecallerSdkScope.Builder(this, sdkCallback)
        .consentMode(TruecallerSdkScope.CONSENT_MODE_BOTTOMSHEET)
        .buttonColor(Color.parseColor(colorSpinner.getSelectedItem().toString()))
        .buttonTextColor(Color.parseColor(colorTextSpinner.getSelectedItem().toString()))
        .loginTextPrefix(TruecallerSdkScope.LOGIN_TEXT_PREFIX_TO_GET_STARTED)
        .loginTextSuffix(TruecallerSdkScope.LOGIN_TEXT_SUFFIX_PLEASE_VERIFY_MOBILE_NO)
        .ctaTextPrefix(TruecallerSdkScope.CTA_TEXT_PREFIX_USE)
        .buttonShapeOptions(TruecallerSdkScope.BUTTON_SHAPE_ROUNDED)
        .privacyPolicyUrl("<<YOUR_PRIVACY_POLICY_LINK>>")
        .termsOfServiceUrl("<<YOUR_PRIVACY_POLICY_LINK>>")
        .footerType(TruecallerSdkScope.FOOTER_TYPE_NONE)
        .consentTitleOption(TruecallerSdkScope.SDK_CONSENT_TITLE_LOG_IN)
        //only tc users.sdkOptions(TruecallerSdkScope.SDK_OPTION_WITHOUT_OTP)
        .sdkOptions(TruecallerSdkScope.SDK_OPTION_WITH_OTP)//tc and non tc users

.build();          

TruecallerSDK.init(trueScope);

    // Set the theme to AppTheme BEFORE onCreate to support 
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    setTheme(R.style.AppTheme);
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "main";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        ));
  }

  /**
   * Align the back button behavior with Android S
   * where moving root activities to background instead of finishing activities.
   * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
   */
  @Override
  public void invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        // For non-root activities, use the default implementation to finish them.
        super.invokeDefaultOnBackPressed();
      }
      return;
    }

    // Use the default back button implementation on Android S
    // because it's doing more than {@link Activity#moveTaskToBack} in fact.
    super.invokeDefaultOnBackPressed();
  }
}
