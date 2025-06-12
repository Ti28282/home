import platform as pf
import uptime
import subprocess as sub
import cpuinfo

seconds = int(uptime.uptime())
minutes = int(seconds / 60)
hour = int(minutes / 60)
day = int(hour / 24)
week = int(day / 7)


class Monitoring:
    
    global OS
    OS = pf.system()

    def __call__(self):
        
        

        if OS == "Windows":
            return self.isWindows()

        elif OS == "Linux":
            return self.isLinux()

        else:
            return {
            "OS":OS + ' ' + pf.release(),
            "HOST":pf.node(),
            "CPU":pf.processor()
            }
    


    def isLinux(self) -> dict:
        output = sub.check_output(['neofetch', '--stdout']).decode('utf-8')
        lines = output.splitlines()
        system_info = {}


        for line in lines:
                if line.startswith("OS:"):
                        system_info['OS'] = line.split("OS:")[1].strip()

                elif line.startswith("Host:"):
                    system_info['HOST'] = line.split("Host:")[1].strip()

                elif line.startswith("Kernel:"):
                    system_info['KERNEL'] = line.split("Kernel:")[1].strip()

                elif line.startswith("Uptime:"):
                    system_info['UPTIME'] = line.split("Uptime:")[1].strip()

                elif line.startswith("Shell:"):
                    system_info['SHELL'] = line.split("Shell:")[1].strip()

                elif line.startswith("CPU:"):
                    system_info['CPU'] = line.split("CPU:")[1].strip()

                elif line.startswith("GPU:"):
                    system_info['GPU'] = line.split("GPU:")[1].strip()

        return system_info

    def isWindows(self) -> dict:
        return {
                "OS":OS + ' ' + pf.release(),
                "HOST":pf.node(),
                "CPU":cpuinfo.get_cpu_info()["brand_raw"]
        }



