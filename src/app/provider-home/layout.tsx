import SideNavigator from "@/app/ui/provider/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
          <div>
            <SideNavigator />
          </div>

          <div>{children}</div>
        </div>   
    );
}