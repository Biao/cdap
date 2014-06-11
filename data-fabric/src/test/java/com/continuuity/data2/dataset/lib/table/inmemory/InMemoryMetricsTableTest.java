package com.continuuity.data2.dataset.lib.table.inmemory;

import com.continuuity.common.guice.DiscoveryRuntimeModule;
import com.continuuity.common.guice.LocationRuntimeModule;
import com.continuuity.common.metrics.MetricsCollectionService;
import com.continuuity.common.metrics.NoOpMetricsCollectionService;
import com.continuuity.data.DataSetAccessor;
import com.continuuity.data.runtime.DataFabricModules;
import com.continuuity.data2.dataset.lib.table.MetricsTableTest;
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.BeforeClass;

/**
 * test in-memory metrics tables.
 */
public class InMemoryMetricsTableTest extends MetricsTableTest {

  @BeforeClass
  public static void setup() {
    Injector injector = Guice.createInjector(new LocationRuntimeModule().getInMemoryModules(),
                                             new DiscoveryRuntimeModule().getInMemoryModules(),
                                             new DataFabricModules().getInMemoryModules(),
                                             new AbstractModule() {
                                               @Override
                                               protected void configure() {
                                                 bind(MetricsCollectionService.class)
                                                   .to(NoOpMetricsCollectionService.class);
                                               }
                                             });
    dsAccessor = injector.getInstance(DataSetAccessor.class);
  }
}
