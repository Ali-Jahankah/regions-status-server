//Adding proper types for the expected response from the provided API

export interface ServiceStatus {
  redis: boolean;
  database: boolean;
}

export interface Stats {
  servers_count: number;
  online: number;
  session: number;
  server: {
    active_connections: number;
    wait_time: number;
    workers: [string, WorkerStats][];
    cpu_load: number;
    timers: number;
  };
}

export interface WorkerStats {
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  time_to_return: number;
  recently_blocked_keys: [string, number, string][];
  top_keys: [string, number][];
}

export interface ApiResponse {
  status: string;
  region: string;
  roles: string[];
  results: {
    services: ServiceStatus;
    stats: Stats;
  };
  strict: boolean;
  server_issue: any;
}
