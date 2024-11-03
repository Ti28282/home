import platform as pf
import psutil
import subprocess as sub
import cpuinfo
import speedtest

import time
# ? Update CPU | GPU | Ethernet

class Monitoring:
    
    global OS
    OS = pf.system()
    

    def __call__(self) -> None:
        
        

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
        st = speedtest.Speedtest()
        st.get_best_server()
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

                elif line.startswith("Memory:"):
                    system_info['MEMORY'] = line.split("Memory:")[1].strip().replace("MiB", " MiB")

                system_info['PING'] = f"{round(st.results.ping, 2)} ms" 
        

        
        return system_info

    def isWindows(self) -> dict:
        return {
                "OS":OS + ' ' + pf.release(),
                "HOST":pf.node(),
                "CPU":cpuinfo.get_cpu_info()["brand_raw"]
        }

class Monitoring_CPU:

    def __new__(self) -> dict:
        # CPU
        return dict(CPU = psutil.cpu_freq(percpu=True))




class Monitoring_SpeedtestUpload:

    def __new__(self):
        interval = 2
        start_time = time.time()
        net_io_start = psutil.net_io_counters()
        
        bytes_sent_start = net_io_start.bytes_sent

         # Пауза для замера скорости
        time.sleep(interval)

        # Второе измерение
        net_io_end = psutil.net_io_counters()
        bytes_sent_end = net_io_end.bytes_sent


        upload_speed = (bytes_sent_end - bytes_sent_start) / interval
        upload_speed_mbps = upload_speed / 1_000_000 * 8 
        end_time = time.time()

        elapsed_time = end_time - start_time

        return dict(ELAPSED_TIME = [round(elapsed_time, 2), "seconds"], UPLOAD = [upload_speed_mbps, "Mb/s"] )
    
class Monitoring_SpeedtestDownload:
    
    def __new__(self):
        interval = 2
        start_time = time.time()
        net_io_start = psutil.net_io_counters()
        
        bytes_recv_start = net_io_start.bytes_recv

        # Пауза для замера скорости
        time.sleep(interval)

        # Второе измерение
        net_io_end = psutil.net_io_counters()
    
        bytes_recv_end = net_io_end.bytes_recv

        # Подсчет скорости (байты/секунду)
        
        download_speed = (bytes_recv_end - bytes_recv_start) / interval

        # Перевод в Мбит/с
        
        download_speed_mbps = download_speed / 1_000_000  * 8 
        end_time = time.time()
        
        elapsed_time = end_time - start_time

        return dict(ELAPSED_TIME = [round(elapsed_time,2),"seconds"], DOWNLOAD = [download_speed_mbps, "Mb/s"] )


    

class Monitoring_RAM:

    def __new__(cls):
        # RAM
        return dict(RAM = psutil.virtual_memory().percent)



        
    