FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine3.8 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk-alpine3.8 AS build
WORKDIR /src
COPY ["src/Services/Monitoring/Monitoring.API/Monitoring.API.csproj", "src/Services/Monitoring/Monitoring.API/"]
RUN dotnet restore "src/Services/Monitoring/Monitoring.API/Monitoring.API.csproj"
COPY . .
WORKDIR "/src/src/Services/Monitoring/Monitoring.API"
RUN dotnet build "Monitoring.API.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Monitoring.API.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Monitoring.API.dll"]