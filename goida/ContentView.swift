import SwiftUI

// MARK: - Main App
@main
struct SecureNetApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(width: 380, height: 600)
                .background(Color.black)
        }
        .windowResizability(.contentSize)
    }
}

// MARK: - Content View
struct ContentView: View {
    @StateObject private var vpnManager = VPNManager()
    @State private var selectedTab = 0
    @State private var showingSplash = true
    
    var body: some View {
        ZStack {
            // Animated Background
            AnimatedBackground()
            
            if showingSplash {
                SplashView()
                    .transition(.opacity)
            } else {
                MainTabView(selectedTab: $selectedTab, vpnManager: vpnManager)
                    .transition(.opacity)
            }
        }
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
                withAnimation(.easeInOut(duration: 1.0)) {
                    showingSplash = false
                }
            }
        }
    }
}

// MARK: - Splash View
struct SplashView: View {
    @State private var rotationAngle: Double = 0
    @State private var progress: Double = 0
    
    var body: some View {
        VStack(spacing: 20) {
            // Logo
            ZStack {
                Circle()
                    .stroke(Color.gray.opacity(0.3), lineWidth: 3)
                    .frame(width: 60, height: 60)
                
                Circle()
                    .trim(from: 0, to: 0.3)
                    .stroke(Color.indigo, lineWidth: 3)
                    .frame(width: 60, height: 60)
                    .rotationEffect(.degrees(rotationAngle))
                
                Image(systemName: "shield.fill")
                    .font(.title)
                    .foregroundColor(.indigo)
            }
            
            Text("goidaNet")
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(.white)
            
            Text("Securing your connection...")
                .font(.caption)
                .foregroundColor(.indigo)
            
            // Progress Bar
            ProgressView(value: progress, total: 1.0)
                .progressViewStyle(LinearProgressViewStyle(tint: .indigo))
                .frame(width: 200)
        }
        .onAppear {
            withAnimation(.linear(duration: 2.5).repeatForever(autoreverses: false)) {
                rotationAngle = 360
            }
            
            withAnimation(.easeOut(duration: 2.5)) {
                progress = 1.0
            }
        }
    }
}

// MARK: - Animated Background
struct AnimatedBackground: View {
    @State private var animate1 = false
    @State private var animate2 = false
    @State private var animate3 = false
    
    var body: some View {
        ZStack {
            // Base dark background
            Color(red: 0.07, green: 0.09, blue: 0.17) // slate-900
                .ignoresSafeArea()
            
            // Animated gradient orbs
            Circle()
                .fill(
                    LinearGradient(
                        colors: [.indigo, .purple, .pink],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 200, height: 200)
                .blur(radius: 60)
                .opacity(0.3)
                .offset(x: animate1 ? 50 : -50, y: animate1 ? -30 : 30)
                .animation(.easeInOut(duration: 4).repeatForever(autoreverses: true), value: animate1)
            
            Circle()
                .fill(
                    LinearGradient(
                        colors: [.cyan, .blue, .indigo],
                        startPoint: .topTrailing,
                        endPoint: .bottomLeading
                    )
                )
                .frame(width: 150, height: 150)
                .blur(radius: 50)
                .opacity(0.25)
                .offset(x: animate2 ? -40 : 40, y: animate2 ? 40 : -40)
                .animation(.easeInOut(duration: 5).repeatForever(autoreverses: true), value: animate2)
            
            Circle()
                .fill(
                    LinearGradient(
                        colors: [.orange, .red, .pink],
                        startPoint: .bottom,
                        endPoint: .top
                    )
                )
                .frame(width: 120, height: 120)
                .blur(radius: 40)
                .opacity(0.2)
                .offset(x: animate3 ? 30 : -30, y: animate3 ? -50 : 50)
                .animation(.easeInOut(duration: 3.5).repeatForever(autoreverses: true), value: animate3)
        }
        .onAppear {
            animate1 = true
            animate2 = true
            animate3 = true
        }
    }
}

// MARK: - Main Tab View
struct MainTabView: View {
    @Binding var selectedTab: Int
    @ObservedObject var vpnManager: VPNManager
    
    var body: some View {
        VStack(spacing: 0) {
            // Custom Tab Content
            Group {
                switch selectedTab {
                case 0:
                    MainVPNView(vpnManager: vpnManager)
                case 1:
                    ServerListView(vpnManager: vpnManager)
                case 2:
                    SettingsView(vpnManager: vpnManager)
                default:
                    MainVPNView(vpnManager: vpnManager)
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            
            // Custom Tab Bar
            CustomTabBar(selectedTab: $selectedTab)
        }
    }
}

// MARK: - Main VPN View
struct MainVPNView: View {
    @ObservedObject var vpnManager: VPNManager
    @State private var pulseAnimation = false
    
    var body: some View {
        VStack(spacing: 30) {
            // Header
            VStack(spacing: 8) {
                HStack {
                    Image(systemName: "shield.fill")
                        .foregroundColor(.indigo)
                    Text("goidaNet")
                        .font(.title2)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                    Spacer()
                    Image(systemName: "ellipsis.circle")
                        .foregroundColor(.gray)
                }
                .padding(.horizontal)
                
                // Status
                HStack {
                    Circle()
                        .fill(vpnManager.isConnected ? Color.green : Color.red)
                        .frame(width: 8, height: 8)
                    
                    Text(vpnManager.isConnected ? "PROTECTED" : "NOT PROTECTED")
                        .font(.caption)
                        .fontWeight(.semibold)
                        .foregroundColor(vpnManager.isConnected ? .green : .red)
                    
                    Spacer()
                }
                .padding(.horizontal)
            }
            
            Spacer()
            
            // Connection Button
            VStack(spacing: 20) {
                ZStack {
                    // Pulse effect
                    if vpnManager.isConnected {
                        Circle()
                            .stroke(Color.indigo.opacity(0.3), lineWidth: 2)
                            .frame(width: 180, height: 180)
                            .scaleEffect(pulseAnimation ? 1.2 : 1.0)
                            .opacity(pulseAnimation ? 0 : 1)
                            .animation(.easeOut(duration: 1.5).repeatForever(autoreverses: false), value: pulseAnimation)
                    }
                    
                    // Main button
                    Button(action: vpnManager.toggleConnection) {
                        ZStack {
                            Circle()
                                .fill(
                                    LinearGradient(
                                        colors: vpnManager.isConnected ?
                                            [.green, .green.opacity(0.8)] :
                                            [.indigo, .purple],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                                .frame(width: 120, height: 120)
                                .shadow(color: vpnManager.isConnected ? .green.opacity(0.3) : .indigo.opacity(0.3), radius: 20)
                            
                            Image(systemName: vpnManager.isConnected ? "checkmark" : "power")
                                .font(.title)
                                .foregroundColor(.white)
                                .fontWeight(.bold)
                        }
                    }
                    .buttonStyle(ScaleButtonStyle())
                }
                
                Text(vpnManager.isConnected ? "Disconnect" : "Connect")
                    .font(.title3)
                    .fontWeight(.semibold)
                    .foregroundColor(.white)
            }
            
            Spacer()
            
            // Server Info Card
            VStack(spacing: 15) {
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Current Server")
                            .font(.caption)
                            .foregroundColor(.gray)
                        
                        HStack {
                            Text(vpnManager.currentServer.flag)
                                .font(.title2)
                            Text(vpnManager.currentServer.name)
                                .font(.headline)
                                .foregroundColor(.white)
                        }
                    }
                    
                    Spacer()
                    
                    VStack(alignment: .trailing, spacing: 4) {
                        Text("Ping")
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text("\(vpnManager.currentServer.ping)ms")
                            .font(.headline)
                            .foregroundColor(.green)
                    }
                }
                
                // IP Info
                if vpnManager.isConnected {
                    HStack {
                        VStack(alignment: .leading, spacing: 4) {
                            Text("Your IP")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text(vpnManager.maskedIP)
                                .font(.system(.body, design: .monospaced))
                                .foregroundColor(.white)
                        }
                        
                        Spacer()
                        
                        VStack(alignment: .trailing, spacing: 4) {
                            Text("Data Transfer")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text("2.1 GB")
                                .font(.body)
                                .foregroundColor(.white)
                        }
                    }
                }
            }
            .padding()
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(Color.white.opacity(0.05))
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(Color.gray.opacity(0.2), lineWidth: 1)
                    )
            )
            .padding(.horizontal)
        }
        .padding(.vertical)
        .onAppear {
            if vpnManager.isConnected {
                pulseAnimation = true
            }
        }
        .onChange(of: vpnManager.isConnected) {
            pulseAnimation = vpnManager.isConnected
        }
    }
}

// MARK: - Server List View
struct ServerListView: View {
    @ObservedObject var vpnManager: VPNManager
    @State private var searchText = ""
    
    var filteredServers: [VPNServer] {
        if searchText.isEmpty {
            return vpnManager.servers
        } else {
            return vpnManager.servers.filter {
                $0.name.localizedCaseInsensitiveContains(searchText) ||
                $0.country.localizedCaseInsensitiveContains(searchText)
            }
        }
    }
    
    var body: some View {
        VStack(spacing: 0) {
            // Header
            HStack {
                Text("Servers")
                    .font(.title2)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                Spacer()
            }
            .padding()
            
            // Search Bar
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.gray)
                
                TextField("Search servers...", text: $searchText)
                    .textFieldStyle(PlainTextFieldStyle())
                    .foregroundColor(.white)
            }
            .padding()
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color.white.opacity(0.05))
                    .stroke(Color.gray.opacity(0.3), lineWidth: 1)
            )
            .padding(.horizontal)
            
            // Recommended Section
            if searchText.isEmpty {
                VStack(alignment: .leading, spacing: 10) {
                    HStack {
                        Text("Recommended")
                            .font(.headline)
                            .foregroundColor(.white)
                        Spacer()
                    }
                    .padding(.horizontal)
                    
                    ServerRow(server: vpnManager.servers.first { $0.isRecommended } ?? vpnManager.servers[0],
                             isSelected: false,
                             action: { server in vpnManager.selectServer(server) })
                }
                .padding(.top)
            }
            
            // All Servers
            ScrollView {
                LazyVStack(spacing: 1) {
                    ForEach(filteredServers) { server in
                        ServerRow(
                            server: server,
                            isSelected: server.id == vpnManager.currentServer.id,
                            action: { server in vpnManager.selectServer(server) }
                        )
                    }
                }
            }
            .padding(.top)
        }
    }
}

// MARK: - Server Row
struct ServerRow: View {
    let server: VPNServer
    let isSelected: Bool
    let action: (VPNServer) -> Void
    
    var body: some View {
        Button(action: { action(server) }) {
            HStack(spacing: 15) {
                // Flag and info
                HStack(spacing: 10) {
                    Text(server.flag)
                        .font(.title2)
                    
                    VStack(alignment: .leading, spacing: 2) {
                        Text(server.name)
                            .font(.headline)
                            .foregroundColor(.white)
                        Text(server.country)
                            .font(.caption)
                            .foregroundColor(.gray)
                    }
                }
                
                Spacer()
                
                // Server load indicator
                HStack(spacing: 8) {
                    VStack(spacing: 2) {
                        Text("\(server.ping)ms")
                            .font(.caption)
                            .foregroundColor(.white)
                        Text("ping")
                            .font(.caption2)
                            .foregroundColor(.gray)
                    }
                    
                    LoadIndicator(load: server.load)
                    
                    if isSelected {
                        Image(systemName: "checkmark.circle.fill")
                            .foregroundColor(.indigo)
                    }
                }
            }
            .padding()
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.indigo.opacity(0.2) : Color.white.opacity(0.02))
                    .stroke(isSelected ? Color.indigo.opacity(0.5) : Color.clear, lineWidth: 1)
            )
            .padding(.horizontal)
        }
        .buttonStyle(PlainButtonStyle())
    }
}

// MARK: - Load Indicator
struct LoadIndicator: View {
    let load: Int
    
    var color: Color {
        switch load {
        case 0..<30: return .green
        case 30..<70: return .yellow
        default: return .red
        }
    }
    
    var body: some View {
        HStack(spacing: 2) {
            ForEach(0..<3) { index in
                Rectangle()
                    .fill(index < loadBars ? color : Color.gray.opacity(0.3))
                    .frame(width: 3, height: CGFloat(8 + index * 2))
            }
        }
    }
    
    private var loadBars: Int {
        switch load {
        case 0..<30: return 1
        case 30..<70: return 2
        default: return 3
        }
    }
}

// MARK: - Settings View
struct SettingsView: View {
    @ObservedObject var vpnManager: VPNManager
    
    var body: some View {
        VStack(spacing: 0) {
            // Header
            HStack {
                Text("Settings")
                    .font(.title2)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                Spacer()
            }
            .padding()
            
            ScrollView {
                VStack(spacing: 20) {
                    // Profile Section
                    SettingsSection(title: "Profile") {
                        VStack(spacing: 15) {
                            HStack {
                                Circle()
                                    .fill(LinearGradient(colors: [.indigo, .purple], startPoint: .topLeading, endPoint: .bottomTrailing))
                                    .frame(width: 50, height: 50)
                                    .overlay(
                                        Text("JD")
                                            .font(.headline)
                                            .fontWeight(.bold)
                                            .foregroundColor(.white)
                                    )
                                
                                VStack(alignment: .leading, spacing: 2) {
                                    Text("John Doe")
                                        .font(.headline)
                                        .foregroundColor(.white)
                                    Text("Premium Plan")
                                        .font(.caption)
                                        .foregroundColor(.indigo)
                                    Text("Expires: Jan 15, 2026")
                                        .font(.caption)
                                        .foregroundColor(.gray)
                                }
                                
                                Spacer()
                            }
                        }
                    }
                    
                    // Connection Settings
                    SettingsSection(title: "Connection") {
                        SettingsToggle(title: "Auto-Connect", subtitle: "Connect automatically when joining unsecured networks", isOn: $vpnManager.autoConnect)
                        SettingsToggle(title: "Kill Switch", subtitle: "Block internet if VPN disconnects", isOn: $vpnManager.killSwitch)
                        SettingsToggle(title: "Start on Login", subtitle: "Launch goidaNet when you log in", isOn: $vpnManager.startOnLogin)
                    }
                    
                    // Privacy Settings
                    SettingsSection(title: "Privacy") {
                        SettingsToggle(title: "DNS Leak Protection", subtitle: "Prevent DNS requests from bypassing VPN", isOn: $vpnManager.dnsProtection)
                        SettingsToggle(title: "IPv6 Leak Protection", subtitle: "Block IPv6 traffic for maximum security", isOn: $vpnManager.ipv6Protection)
                    }
                    
                    // About Section
                    SettingsSection(title: "About") {
                        VStack(spacing: 10) {
                            SettingsRow(title: "Version", value: "2.1.0")
                            SettingsRow(title: "Protocol", value: "WireGuard")
                            SettingsRow(title: "Encryption", value: "AES-256")
                        }
                    }
                }
                .padding()
            }
        }
    }
}

// MARK: - Settings Components
struct SettingsSection<Content: View>: View {
    let title: String
    let content: Content
    
    init(title: String, @ViewBuilder content: () -> Content) {
        self.title = title
        self.content = content()
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(title)
                .font(.headline)
                .foregroundColor(.white)
                .padding(.leading)
            
            VStack(spacing: 1) {
                content
            }
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color.white.opacity(0.05))
                    .stroke(Color.gray.opacity(0.2), lineWidth: 1)
            )
        }
    }
}

struct SettingsToggle: View {
    let title: String
    let subtitle: String
    @Binding var isOn: Bool
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.body)
                    .foregroundColor(.white)
                Text(subtitle)
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            Toggle("", isOn: $isOn)
                .toggleStyle(SwitchToggleStyle(tint: .indigo))
        }
        .padding()
    }
}

struct SettingsRow: View {
    let title: String
    let value: String
    
    var body: some View {
        HStack {
            Text(title)
                .foregroundColor(.white)
            Spacer()
            Text(value)
                .foregroundColor(.gray)
        }
        .padding()
    }
}

// MARK: - Custom Tab Bar
struct CustomTabBar: View {
    @Binding var selectedTab: Int
    
    var body: some View {
        HStack(spacing: 0) {
            ForEach(0..<3) { index in
                Button(action: { selectedTab = index }) {
                    VStack(spacing: 4) {
                        Image(systemName: tabIcon(for: index))
                            .font(.title2)
                            .foregroundColor(selectedTab == index ? .indigo : .gray)
                        
                        Text(tabTitle(for: index))
                            .font(.caption)
                            .foregroundColor(selectedTab == index ? .indigo : .gray)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 8)
                }
                .buttonStyle(PlainButtonStyle())
            }
        }
        .padding(.top, 8)
        .background(
            Rectangle()
                .fill(Color.black.opacity(0.8))
                .background(.ultraThinMaterial)
        )
    }
    
    private func tabIcon(for index: Int) -> String {
        switch index {
        case 0: return "shield.fill"
        case 1: return "globe"
        case 2: return "gearshape.fill"
        default: return "shield.fill"
        }
    }
    
    private func tabTitle(for index: Int) -> String {
        switch index {
        case 0: return "Connect"
        case 1: return "Servers"
        case 2: return "Settings"
        default: return "Connect"
        }
    }
}

// MARK: - Scale Button Style
struct ScaleButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.95 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: configuration.isPressed)
    }
}

// MARK: - VPN Manager
class VPNManager: ObservableObject {
    @Published var isConnected = false
    @Published var servers: [VPNServer]
    @Published var currentServer: VPNServer
    @Published var autoConnect = true
    @Published var killSwitch = true
    @Published var startOnLogin = false
    @Published var dnsProtection = true
    @Published var ipv6Protection = true
    
    let maskedIP = "198.51.100.42"
    
    init() {
        let serverList = [
            VPNServer(name: "New York", country: "United States", flag: "🇺🇸", ping: 12, load: 25, isRecommended: true),
            VPNServer(name: "London", country: "United Kingdom", flag: "🇬🇧", ping: 8, load: 45),
            VPNServer(name: "Berlin", country: "Germany", flag: "🇩🇪", ping: 15, load: 30),
            VPNServer(name: "Tokyo", country: "Japan", flag: "🇯🇵", ping: 45, load: 60),
            VPNServer(name: "Sydney", country: "Australia", flag: "🇦🇺", ping: 55, load: 35),
            VPNServer(name: "Toronto", country: "Canada", flag: "🇨🇦", ping: 18, load: 40),
            VPNServer(name: "Amsterdam", country: "Netherlands", flag: "🇳🇱", ping: 12, load: 50),
            VPNServer(name: "Singapore", country: "Singapore", flag: "🇸🇬", ping: 35, load: 25),
            VPNServer(name: "Stockholm", country: "Sweden", flag: "🇸🇪", ping: 20, load: 30),
            VPNServer(name: "Zurich", country: "Switzerland", flag: "🇨🇭", ping: 16, load: 40)
        ]
        
        self.servers = serverList
        self.currentServer = serverList[0]
    }
    
    func toggleConnection() {
        withAnimation(.easeInOut(duration: 0.5)) {
            isConnected.toggle()
        }
    }
    
    func selectServer(_ server: VPNServer) {
        currentServer = server
        if isConnected {
            // Simulate reconnection
            withAnimation(.easeInOut(duration: 0.3)) {
                isConnected = false
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                withAnimation(.easeInOut(duration: 0.3)) {
                    self.isConnected = true
                }
            }
        }
    }
}

// MARK: - VPN Server Model
struct VPNServer: Identifiable {
    let id = UUID()
    let name: String
    let country: String
    let flag: String
    let ping: Int
    let load: Int
    let isRecommended: Bool
    
    init(name: String, country: String, flag: String, ping: Int, load: Int, isRecommended: Bool = false) {
        self.name = name
        self.country = country
        self.flag = flag
        self.ping = ping
        self.load = load
        self.isRecommended = isRecommended
    }
}
