/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <OneSignal/OneSignal.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <RCTOneSignal.h>

//@property (strong, nonatomic) RCTOneSignal* oneSignal;
@implementation AppDelegate
//@synthesize oneSignal = _oneSignal;


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"detecta"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  //Add this line. Replace '5eb5a37e-b458-11e3-ac11-000c2940e62c' with your OneSignal App ID.
  NSString *ONESIGNAL_APP_ID = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"OneSignalAppId"];
  [OneSignal initWithLaunchOptions:launchOptions appId:ONESIGNAL_APP_ID];
  //self.oneSignal = [[RCTOneSignal alloc] initWithLaunchOptions:launchOptions
  //                                                       appId:@"e5afb5bf-8286-46d2-9fe7-296c73336833"];
  
  return YES;
}

// Required for the notification event.
/*- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification {
  [RCTOneSignal didReceiveRemoteNotification:notification];
}*/
@end
